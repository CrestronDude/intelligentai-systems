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

  // ── Video playback ──────────────────────────────────────────────
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
        // Sound autoplay blocked — fall back to muted playback.
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
  // Backdrop brightness from lighting + shade daylight.
  const filterBrightness = lit ? 0.4 + b * 0.8 : 0.22;
  const darkness = lit ? (1 - b) * 0.55 : 0.84;
  const shadeDark = room.hasShades ? (1 - state.shades / 100) * 0.28 : 0;
  const shadeCover = 100 - state.shades; // % of window covered

  return (
    <div className="relative w-full h-full overflow-hidden bg-charcoal select-none">
      {/* Backdrop */}
      <div
        className="absolute inset-0 transition-[filter] duration-700"
        style={{ filter: `brightness(${filterBrightness}) saturate(1.05)` }}
      >
        <Image
          src={room.backdrop}
          alt={room.name}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Light color wash */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          backgroundColor: `rgba(${tint},${lit ? 0.26 : 0})`,
          mixBlendMode: "soft-light",
        }}
      />
      {/* Darkness / dim */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ backgroundColor: `rgba(6,8,18,${Math.min(0.92, darkness + shadeDark)})` }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 40%, transparent 45%, rgba(6,8,18,0.6) 100%)" }}
      />

      {/* Window + powered blinds */}
      {room.hasShades && (
        <div className="absolute top-[8%] left-[5%] w-[26%] max-w-[230px] aspect-[3/4] hidden sm:block">
          <div className="relative w-full h-full border border-cream/15 overflow-hidden"
            style={{ background: "linear-gradient(180deg, #bcd3ef 0%, #e9d7b8 75%, #d8b98e 100%)" }}>
            {/* daylight glow */}
            <div className="absolute inset-0" style={{ opacity: state.shades / 100, background: "radial-gradient(circle at 50% 30%, rgba(255,245,210,0.7), transparent 70%)" }} />
            {/* blinds */}
            <div
              className="absolute top-0 left-0 right-0 transition-[height] duration-[900ms] ease-out"
              style={{
                height: `${shadeCover}%`,
                backgroundImage:
                  "repeating-linear-gradient(180deg, rgba(28,28,28,0.96) 0px, rgba(40,40,40,0.96) 7px, rgba(20,20,20,0.96) 9px)",
                boxShadow: "0 6px 10px rgba(0,0,0,0.4)",
              }}
            />
            <div className="absolute inset-0 border border-charcoal-700 pointer-events-none" />
          </div>
          <span className="text-label text-cream-muted text-[0.5rem] mt-2 block tracking-[0.2em]">
            Shades · {state.shades}%
          </span>
        </div>
      )}

      {/* Wall-mounted display */}
      {room.hasVideo && (
        <div className="absolute top-1/2 right-[6%] -translate-y-1/2 w-[52%] max-w-[640px]">
          <div className="relative aspect-video bg-black border border-charcoal-600 shadow-2xl overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              loop
              preload="metadata"
              poster=""
            />
            {!state.videoOn && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-charcoal-800 to-black">
                <span className="w-2 h-2 rounded-full bg-gold/60 animate-pulse" />
              </div>
            )}
            {/* screen sheen */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(120deg, rgba(255,255,255,0.06) 0%, transparent 35%)" }} />
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-label text-cream-muted text-[0.5rem] tracking-[0.2em]">
              Display · {state.videoOn ? videoOf(state.videoSource).name : "Standby"}
            </span>
          </div>
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
              <span
                key={i}
                className="w-[3px] bg-gold/80 rounded-full"
                style={{ height: `${state.audioOn ? Math.max(6, l * 100) : 4}%`, transition: "height 90ms linear" }}
              />
            ))}
          </div>
        </div>
        {/* Room HUD */}
        <div className="text-right glass border border-gold/15 px-4 py-2.5">
          <span className="text-label text-gold text-[0.5rem] tracking-[0.2em] block">
            {room.name}
          </span>
          <span className="text-cream text-sm font-display">
            {lit ? `${state.brightness}%` : "Lights Off"} · {state.temp}°F
          </span>
        </div>
      </div>
    </div>
  );
}
