"use client";

import { useEffect, useReducer, useState } from "react";
import RoomStage from "./RoomStage";
import TouchPanel from "./TouchPanel";
import RemoteControl from "./RemoteControl";
import { useHomeAudio } from "./useHomeAudio";
import {
  ROOMS,
  SCENES,
  AUDIO_SOURCES,
  defaultRoomState,
  type RoomId,
  type RoomState,
} from "./simulatorData";

interface HomeState {
  activeRoom: RoomId;
  rooms: Record<RoomId, RoomState>;
}

type Action =
  | { type: "room"; id: RoomId }
  | { type: "patch"; patch: Partial<RoomState> }
  | { type: "allOff" };

function reducer(s: HomeState, a: Action): HomeState {
  switch (a.type) {
    case "room":
      return { ...s, activeRoom: a.id };
    case "patch":
      return {
        ...s,
        rooms: { ...s.rooms, [s.activeRoom]: { ...s.rooms[s.activeRoom], ...a.patch } },
      };
    case "allOff": {
      const rooms = { ...s.rooms };
      (Object.keys(rooms) as RoomId[]).forEach((k) => {
        rooms[k] = { ...rooms[k], lightOn: false, audioOn: false, videoOn: false };
      });
      return { ...s, rooms };
    }
  }
}

function init(): HomeState {
  return {
    activeRoom: "living",
    rooms: {
      living: defaultRoomState(),
      theater: { ...defaultRoomState(), brightness: 35, colorId: "violet" },
      bedroom: { ...defaultRoomState(), brightness: 55 },
      outdoor: { ...defaultRoomState(), colorId: "warm", audioSource: "chill" },
    },
  };
}

export default function Simulator() {
  const [state, dispatch] = useReducer(reducer, undefined, init);
  const [mode, setMode] = useState<"touch" | "remote">("touch");
  const audio = useHomeAudio();

  const room = ROOMS.find((r) => r.id === state.activeRoom)!;
  const active = state.rooms[state.activeRoom];

  const patch = (p: Partial<RoomState>) => dispatch({ type: "patch", patch: p });
  const setRoom = (id: RoomId) => dispatch({ type: "room", id });
  const scene = (id: string) => {
    const sc = SCENES.find((s) => s.id === id);
    if (sc) dispatch({ type: "patch", patch: sc.patch });
  };

  // Drive the audio engine from the active room's audio state.
  useEffect(() => {
    const src = AUDIO_SOURCES.find((a) => a.id === active.audioSource);
    if (src) audio.setChord(src.freqs);
    audio.setVolume(active.volume / 100);
    audio.setPlaying(active.audioOn);
  }, [state.activeRoom, active.audioOn, active.audioSource, active.volume, audio]);

  const controlProps = { room, state: active, setRoom, patch, scene };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(320px,380px)] gap-3 h-[78vh] min-h-[560px]">
      {/* Environment */}
      <div className="relative border border-charcoal-500 overflow-hidden min-h-[44vh] lg:min-h-0">
        <RoomStage room={room} state={active} audio={audio} />
        <button
          onClick={() => dispatch({ type: "allOff" })}
          className="absolute top-4 right-4 z-20 text-[0.55rem] text-label tracking-widest text-cream-muted border border-charcoal-500 bg-charcoal/60 px-3 py-1.5 hover:border-gold hover:text-gold transition-colors"
        >
          All Off
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-3 min-h-0">
        <div className="grid grid-cols-2 gap-1 flex-shrink-0">
          {(["touch", "remote"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`py-2.5 text-[0.6rem] text-label tracking-widest border transition-colors duration-200 ${
                mode === m
                  ? "bg-gold text-charcoal border-gold"
                  : "text-cream-muted border-charcoal-500 hover:border-gold/50"
              }`}
            >
              {m === "touch" ? "Touch Panel" : "Remote"}
            </button>
          ))}
        </div>
        <div className="flex-1 min-h-0">
          {mode === "touch" ? (
            <TouchPanel {...controlProps} />
          ) : (
            <RemoteControl {...controlProps} />
          )}
        </div>
      </div>
    </div>
  );
}
