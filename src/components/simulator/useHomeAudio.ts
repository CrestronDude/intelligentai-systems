"use client";

import { useEffect, useMemo, useRef } from "react";

/**
 * Procedural ambient audio engine for the simulator. Generates a soft, evolving
 * pad with the Web Audio API (no audio files), retunes to different "stations,"
 * responds to volume/play, and exposes live levels for the visualizer.
 *
 * The AudioContext is created lazily inside a user gesture (browser requirement).
 */
export interface AudioEngine {
  start: () => void;
  setPlaying: (p: boolean) => void;
  setVolume: (v: number) => void; // 0..1
  setChord: (freqs: number[]) => void;
  getLevels: (bins: number) => number[]; // 0..1 per bar
}

export function useHomeAudio(): AudioEngine {
  const ctxRef = useRef<AudioContext | null>(null);
  const oscsRef = useRef<OscillatorNode[]>([]);
  const masterRef = useRef<GainNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const startedRef = useRef(false);
  const playingRef = useRef(false);
  const volRef = useRef(0.45);

  const apply = () => {
    const master = masterRef.current;
    const ctx = ctxRef.current;
    if (!master || !ctx) return;
    const target = playingRef.current ? volRef.current * 0.16 : 0;
    master.gain.setTargetAtTime(target, ctx.currentTime, 0.5);
  };

  const start = () => {
    if (startedRef.current) {
      ctxRef.current?.resume?.();
      return;
    }
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!Ctx) return;
    startedRef.current = true;
    const ctx = new Ctx();
    ctxRef.current = ctx;

    const master = ctx.createGain();
    master.gain.value = 0;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 900;
    filter.Q.value = 0.7;
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 64;
    analyser.smoothingTimeConstant = 0.82;

    const mix = ctx.createGain();
    mix.gain.value = 0.6;
    const base = [110.0, 164.81, 220.0];
    const oscs = base.map((f, i) => {
      const o = ctx.createOscillator();
      o.type = i === 0 ? "sine" : "triangle";
      o.frequency.value = f;
      const g = ctx.createGain();
      g.gain.value = 1 / base.length;
      o.connect(g);
      g.connect(mix);
      o.start();
      return o;
    });

    // Slow filter sweep for a living, breathing pad.
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.07;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 280;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    mix.connect(filter);
    filter.connect(master);
    master.connect(analyser);
    analyser.connect(ctx.destination);

    oscsRef.current = oscs;
    masterRef.current = master;
    analyserRef.current = analyser;
    dataRef.current = new Uint8Array(analyser.frequencyBinCount);
    ctx.resume?.().catch(() => {});
    apply();
  };

  const setPlaying = (p: boolean) => {
    playingRef.current = p;
    if (p) start();
    apply();
  };
  const setVolume = (v: number) => {
    volRef.current = Math.max(0, Math.min(1, v));
    apply();
  };
  const setChord = (freqs: number[]) => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    oscsRef.current.forEach((o, i) => {
      const f = freqs[i % freqs.length];
      o.frequency.setTargetAtTime(f, ctx.currentTime, 0.35);
    });
  };
  const getLevels = (bins: number) => {
    const an = analyserRef.current;
    const data = dataRef.current;
    if (!an || !data || !playingRef.current) return new Array(bins).fill(0);
    an.getByteFrequencyData(data);
    const out: number[] = [];
    const step = Math.max(1, Math.floor(data.length / bins));
    for (let i = 0; i < bins; i++) {
      out.push(Math.min(1, (data[i * step] || 0) / 210));
    }
    return out;
  };

  useEffect(() => {
    return () => {
      try {
        ctxRef.current?.close();
      } catch {
        /* noop */
      }
    };
  }, []);

  // Stable identity so consumers' effects don't re-run every render.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => ({ start, setPlaying, setVolume, setChord, getLevels }), []);
}
