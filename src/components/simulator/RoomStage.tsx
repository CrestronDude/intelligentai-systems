"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  type RoomConfig,
  type RoomState,
  tintOf,
  videoOf,
  audioName,
} from "./simulatorData";
import type { AudioEngine } from "./useHomeAudio";

const BARS = 18;

export default function RoomStage({
  room,
  state,
  audio,
}: {
  room: RoomConfig;
  state: RoomState;
  audio: AudioEngine;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [levels, setLevels] = useState<number[]>(new Array(BARS).fill(0));

  // ── Video plays on the room's real screen ───────────────────────
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const src = videoOf(state.videoSource).url;
    if (!v.src.includes(src)) {
      v.src = src;
      v.load();
    }
    if (room.hasVideo && state.videoOn) {
      v.play().catch(() => {
        v.muted = true;
        v.play().catch(() => {});
      });
    } else {
      v.pause();
    }
  }, [room.hasVideo, state.videoOn, state.videoSource]);

  // ── Audio visualizer ────────────────────────────────────────────
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      setLevels(audio.getLevels(BARS));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [audio]);

  const lit = state.lightOn;
  const b = state.brightness / 100;
  const tint = tintOf(state.colorId);
  const filterBrightness = lit ? 0.4 + b * 0.82 : 0.2;
  const darkness = lit ? (1 - b) * 0.55 : 0.85;
  const shadeDark = room.hasShades ? (1 - state.shades / 100) * 0.26 : 0;
  const coverPct = 100 - state.shades; // % of window the shade covers

  const pctStyle = (r?: { left: number; top: number; width: number; height: number }) =>
    r ? { left: `${r.left}%`, top: `${r.top}%`, width: `${r.width}%`, height: `${r.height}%` } : {};

  return (
    <div className="relative w-full h-full overflow-hidden bg-charcoal select-none">
      {/* Backdrop — real fixtures dim with brightness */}
      <div
        className="absolute inset-0 transition-[filter] duration-700"
        style={{ filter: `brightness(${filterBrightness}) saturate(1.06)` }}
      >
        <Image src={room.backdrop} alt={room.name} fill priority className="object-cover object-center" sizes="100vw" />
      </div>

      {/* Light color wash */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ backgroundColor: `rgba(${tint},${lit ? 0.24 : 0})`, mixBlendMode: "soft-light" }}
      />
      {/* Warm "lit" ambiance from fixtures */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          opacity: lit ? b * 0.5 : 0,
          background: `radial-gradient(120% 80% at 50% 0%, rgba(${tint},0.22), transparent 60%)`,
        }}
      />
      {/* Dim */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ backgroundColor: `rgba(6,8,18,${Math.min(0.93, darkness + shadeDark)})` }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 42%, transparent 46%, rgba(6,8,18,0.6) 100%)" }}
      />

      {/* Powered shade over the real window */}
      {room.hasShades && room.window && (
        <div className="absolute" style={pctStyle(room.window)}>
          {/* Daylight that the shade blocks */}
          <div className="absolute inset-0 transition-opacity duration-700" style={{ opacity: (state.shades / 100) * (lit ? 1 : 0.6), background: "linear-gradient(180deg, rgba(220,235,255,0.45), rgba(255,240,210,0.25))" }} />
          {/* Roller shade */}
          <div
            className="absolute top-0 left-0 right-0 transition-[height] duration-[900ms] ease-out overflow-hidden"
            style={{ height: `${coverPct}%` }}
          >
            <div className="w-full h-full" style={{ backgroundImage: "repeating-linear-gradient(180deg, rgba(30,28,24,0.97) 0px, rgba(46,42,36,0.97) 6px, rgba(24,22,19,0.97) 8px)", boxShadow: "0 8px 14px rgba(0,0,0,0.5)" }} />
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-charcoal-600" />
          </div>
        </div>
      )}

      {/* Video on the real display */}
      {room.hasVideo && room.screen && (
        <div className="absolute overflow-hidden" style={pctStyle(room.screen)}>
          <video ref={videoRef} className="w-full h-full object-cover" playsInline loop preload="metadata" />
          {!state.videoOn && (
            <div className="absolute inset-0 bg-black/92 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-gold/50 animate-pulse" />
            </div>
          )}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(120deg, rgba(255,255,255,0.07) 0%, transparent 38%)" }} />
        </div>
      )}

      {/* Audio visualizer + now playing */}
      <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between gap-4 pointer-events-none">
        <div>
          <span className="text-label text-gold text-[0.5rem] tracking-[0.25em] block mb-2">
            {state.audioOn ? `Now Playing · ${audioName(state.audioSource)}` : "Audio · Off"}
          </span>
          <div className="flex items-end gap-[3px] h-10">
            {levels.map((l, i) => (
              <span key={i} className="w-[3px] bg-gold/80 rounded-full" style={{ height: `${state.audioOn ? Math.max(6, l * 100) : 4}%`, transition: "height 90ms linear" }} />
            ))}
          </div>
        </div>
        <div className="text-right glass border border-gold/15 px-4 py-2.5">
          <span className="text-label text-gold text-[0.5rem] tracking-[0.2em] block">{room.name}</span>
          <span className="text-cream text-sm font-display">
            {lit ? `${state.brightness}%` : "Lights Off"} · {state.temp}°F
          </span>
        </div>
      </div>
    </div>
  );
}
