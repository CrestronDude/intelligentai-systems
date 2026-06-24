"use client";

import { useRef } from "react";
import {
  ROOMS,
  SCENES,
  VIDEO_SOURCES,
  type RoomConfig,
  type RoomState,
  type RoomId,
} from "./simulatorData";

interface Props {
  room: RoomConfig;
  state: RoomState;
  setRoom: (id: RoomId) => void;
  patch: (p: Partial<RoomState>) => void;
  scene: (id: string) => void;
}

const clamp = (n: number) => Math.max(0, Math.min(100, n));

function Btn({
  onClick,
  children,
  className = "",
  label,
}: {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`flex items-center justify-center text-cream-muted hover:text-gold active:scale-95 transition-all duration-150 ${className}`}
    >
      {children}
    </button>
  );
}

export default function RemoteControl({ room, state, setRoom, patch, scene }: Props) {
  const sceneIdx = useRef(0);

  const cycleRoom = (dir: number) => {
    const i = ROOMS.findIndex((r) => r.id === room.id);
    setRoom(ROOMS[(i + dir + ROOMS.length) % ROOMS.length].id);
  };
  const nextScene = () => {
    sceneIdx.current = (sceneIdx.current + 1) % SCENES.length;
    scene(SCENES[sceneIdx.current].id);
  };
  const cycleVideo = (dir: number) => {
    const i = VIDEO_SOURCES.findIndex((v) => v.id === state.videoSource);
    const next = VIDEO_SOURCES[(i + dir + VIDEO_SOURCES.length) % VIDEO_SOURCES.length];
    patch({ videoSource: next.id, videoOn: true });
  };

  return (
    <div className="flex items-start justify-center h-full overflow-y-auto py-2" data-lenis-prevent>
      <div className="w-[260px] rounded-[2rem] bg-gradient-to-b from-charcoal-700 to-charcoal-800 border border-charcoal-500 shadow-2xl px-6 py-7 flex flex-col gap-6">
        {/* Brand + power */}
        <div className="flex items-center justify-between">
          <span className="text-label text-gold text-[0.5rem] tracking-[0.25em]">AI · REMOTE</span>
          <Btn
            onClick={() => patch({ lightOn: !state.lightOn })}
            label="Power"
            className={`w-9 h-9 rounded-full border ${state.lightOn ? "border-gold text-gold" : "border-charcoal-500"}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v9M6.4 6.4a8 8 0 1 0 11.2 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </Btn>
        </div>

        {/* Room rocker */}
        <div className="flex items-center justify-between bg-charcoal/60 rounded-full px-2 py-1.5">
          <Btn onClick={() => cycleRoom(-1)} label="Previous room" className="w-8 h-8">‹</Btn>
          <span className="text-[0.6rem] text-cream text-label tracking-widest truncate">{room.name}</span>
          <Btn onClick={() => cycleRoom(1)} label="Next room" className="w-8 h-8">›</Btn>
        </div>

        {/* D-pad */}
        <div className="relative w-40 h-40 mx-auto rounded-full bg-charcoal/50 border border-charcoal-600">
          <Btn onClick={() => patch({ brightness: clamp(state.brightness + 10), lightOn: true })} label="Brighter" className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-10 text-base">▲</Btn>
          <Btn onClick={() => patch({ brightness: clamp(state.brightness - 10) })} label="Dimmer" className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 text-base">▼</Btn>
          <Btn onClick={() => room.hasShades && patch({ shades: clamp(state.shades - 20) })} label="Shades down" className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 text-base">◀</Btn>
          <Btn onClick={() => room.hasShades && patch({ shades: clamp(state.shades + 20) })} label="Shades up" className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 text-base">▶</Btn>
          <button
            onClick={nextScene}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gold text-charcoal text-[0.55rem] text-label tracking-widest hover:bg-gold-light transition-colors"
          >
            SCENE
          </button>
        </div>

        {/* Volume + Channel */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-full bg-charcoal/60 flex flex-col items-center py-2 gap-1">
            <Btn onClick={() => patch({ volume: clamp(state.volume + 10), audioOn: true })} label="Volume up" className="w-9 h-7 text-sm">＋</Btn>
            <span className="text-[0.45rem] text-warm-gray tracking-[0.2em]">VOL</span>
            <Btn onClick={() => patch({ volume: clamp(state.volume - 10) })} label="Volume down" className="w-9 h-7 text-sm">－</Btn>
          </div>
          <div className="rounded-full bg-charcoal/60 flex flex-col items-center py-2 gap-1">
            <Btn onClick={() => cycleVideo(1)} label="Channel up" className="w-9 h-7 text-sm">＋</Btn>
            <span className="text-[0.45rem] text-warm-gray tracking-[0.2em]">CH</span>
            <Btn onClick={() => cycleVideo(-1)} label="Channel down" className="w-9 h-7 text-sm">－</Btn>
          </div>
        </div>

        {/* Mute + TV */}
        <div className="flex items-center justify-between gap-3">
          <Btn
            onClick={() => patch({ audioOn: !state.audioOn })}
            label="Mute audio"
            className={`flex-1 py-2.5 rounded-full border text-[0.55rem] text-label tracking-widest ${state.audioOn ? "border-gold/40 text-gold" : "border-charcoal-500"}`}
          >
            {state.audioOn ? "AUDIO ON" : "MUTED"}
          </Btn>
          {room.hasVideo && (
            <Btn
              onClick={() => patch({ videoOn: !state.videoOn })}
              label="Toggle display"
              className={`flex-1 py-2.5 rounded-full border text-[0.55rem] text-label tracking-widest ${state.videoOn ? "border-gold/40 text-gold" : "border-charcoal-500"}`}
            >
              {state.videoOn ? "TV ON" : "TV"}
            </Btn>
          )}
        </div>

        {/* Quick scenes */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          {["evening", "movie", "goodnight"].map((id) => (
            <button
              key={id}
              onClick={() => scene(id)}
              className="text-[0.5rem] text-cream-muted border border-charcoal-600 hover:border-gold hover:text-gold py-2 text-label tracking-wide transition-colors"
            >
              {SCENES.find((s) => s.id === id)?.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
