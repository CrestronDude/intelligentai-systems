"use client";

import { useEffect, useMemo, useRef } from "react";

/**
 * Real audio playback engine for the simulator. Plays self-hosted MP3 tracks
 * through the Web Audio API so the visualizer reacts to the actual music.
 * The AudioContext + media element are created lazily inside a user gesture.
 */
export interface AudioEngine {
  start: () => void;
  setTrack: (url: string) => void;
  setPlaying: (p: boolean) => void;
  setVolume: (v: number) => void; // 0..1
  getLevels: (bins: number) => number[];
}

export function useHomeAudio(): AudioEngine {
  const elRef = useRef<HTMLAudioElement | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const startedRef = useRef(false);
  const trackRef = useRef<string>("");
  const volRef = useRef(0.45);
  const playingRef = useRef(false);

  const start = () => {
    if (startedRef.current) {
      ctxRef.current?.resume?.();
      const el = elRef.current;
      if (el && playingRef.current) el.play().catch(() => {});
      return;
    }
    startedRef.current = true;

    const el = new Audio();
    el.loop = true;
    el.preload = "auto";
    el.crossOrigin = "anonymous";
    el.src = trackRef.current || "/media/audio/track-1.mp3";
    el.volume = volRef.current;
    elRef.current = el;

    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (Ctx) {
      try {
        const ctx = new Ctx();
        ctxRef.current = ctx;
        const source = ctx.createMediaElementSource(el);
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 64;
        analyser.smoothingTimeConstant = 0.82;
        source.connect(analyser);
        analyser.connect(ctx.destination);
        analyserRef.current = analyser;
        dataRef.current = new Uint8Array(analyser.frequencyBinCount);
        ctx.resume?.().catch(() => {});
      } catch {
        /* analyser optional — audio still plays via the element */
      }
    }

    if (playingRef.current) el.play().catch(() => {});
  };

  const setTrack = (url: string) => {
    trackRef.current = url;
    const el = elRef.current;
    if (el && !el.src.includes(url)) {
      el.src = url;
      el.load();
      if (playingRef.current) el.play().catch(() => {});
    }
  };
  const setVolume = (v: number) => {
    volRef.current = Math.max(0, Math.min(1, v));
    if (elRef.current) elRef.current.volume = volRef.current;
  };
  const setPlaying = (p: boolean) => {
    playingRef.current = p;
    if (p) start();
    const el = elRef.current;
    if (!el) return;
    if (p) el.play().catch(() => {});
    else el.pause();
  };
  const getLevels = (bins: number) => {
    const an = analyserRef.current;
    const data = dataRef.current;
    if (!an || !data || !playingRef.current) return new Array(bins).fill(0);
    an.getByteFrequencyData(data);
    const out: number[] = [];
    const step = Math.max(1, Math.floor(data.length / bins));
    for (let i = 0; i < bins; i++) out.push(Math.min(1, (data[i * step] || 0) / 210));
    return out;
  };

  useEffect(() => {
    return () => {
      try {
        elRef.current?.pause();
        ctxRef.current?.close();
      } catch {
        /* noop */
      }
    };
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => ({ start, setTrack, setPlaying, setVolume, getLevels }), []);
}
