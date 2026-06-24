"use client";

import {
  ROOMS,
  SCENES,
  LIGHT_COLORS,
  AUDIO_SOURCES,
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

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-charcoal-600 pt-4 mt-4 first:border-0 first:mt-0 first:pt-0">
      <span className="text-label text-gold text-[0.55rem] tracking-[0.2em] block mb-3">
        {label}
      </span>
      {children}
    </div>
  );
}

function Slider({
  value,
  onChange,
  disabled,
}: {
  value: number;
  onChange: (v: number) => void;
  disabled?: boolean;
}) {
  return (
    <input
      type="range"
      min={0}
      max={100}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full accent-gold h-1 cursor-pointer disabled:opacity-30"
    />
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-[0.62rem] text-label tracking-wide px-3 py-2 border transition-colors duration-200 ${
        active
          ? "bg-gold text-charcoal border-gold"
          : "text-cream-muted border-charcoal-500 hover:border-gold/50"
      }`}
    >
      {children}
    </button>
  );
}

export default function TouchPanel({ room, state, setRoom, patch, scene }: Props) {
  return (
    <div className="glass border border-gold/20 h-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-charcoal-600 flex items-center justify-between">
        <div>
          <span className="text-label text-gold text-[0.5rem] tracking-[0.25em] block">
            Touch Panel
          </span>
          <span className="font-display text-lg text-cream font-light leading-none">
            {room.name}
          </span>
        </div>
        <span className="text-[0.5rem] text-warm-gray tracking-[0.2em] uppercase">
          {room.subtitle}
        </span>
      </div>

      {/* Rooms */}
      <div className="px-5 py-3 border-b border-charcoal-600 flex gap-2 overflow-x-auto">
        {ROOMS.map((r) => (
          <button
            key={r.id}
            onClick={() => setRoom(r.id)}
            className={`flex-shrink-0 text-[0.6rem] text-label px-3 py-1.5 border transition-colors duration-200 ${
              r.id === room.id
                ? "bg-gold/15 text-gold border-gold/40"
                : "text-warm-gray border-charcoal-600 hover:text-cream"
            }`}
          >
            {r.name}
          </button>
        ))}
      </div>

      {/* Scrollable controls */}
      <div className="flex-1 overflow-y-auto px-5 py-4" data-lenis-prevent>
        <Section label="Scenes">
          <div className="grid grid-cols-3 gap-2">
            {SCENES.map((s) => (
              <button
                key={s.id}
                onClick={() => scene(s.id)}
                className="text-[0.6rem] text-cream-muted border border-charcoal-500 hover:border-gold hover:text-gold transition-colors duration-200 py-3 text-label tracking-wide"
              >
                {s.name}
              </button>
            ))}
          </div>
        </Section>

        <Section label="Lighting">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-cream">{state.lightOn ? "On" : "Off"}</span>
            <button
              onClick={() => patch({ lightOn: !state.lightOn })}
              className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
                state.lightOn ? "bg-gold" : "bg-charcoal-500"
              }`}
              aria-pressed={state.lightOn}
            >
              <span
                className={`absolute top-0.5 w-5 h-5 rounded-full bg-charcoal transition-all duration-300 ${
                  state.lightOn ? "left-6" : "left-0.5"
                }`}
              />
            </button>
          </div>
          <Slider value={state.brightness} disabled={!state.lightOn} onChange={(v) => patch({ brightness: v, lightOn: v > 0 })} />
          <div className="flex flex-wrap gap-2 mt-3">
            {LIGHT_COLORS.map((c) => (
              <button
                key={c.id}
                onClick={() => patch({ colorId: c.id, lightOn: true })}
                aria-label={c.label}
                className={`w-7 h-7 rounded-full border-2 transition-transform duration-200 ${
                  state.colorId === c.id ? "border-gold scale-110" : "border-charcoal-500"
                }`}
                style={{ backgroundColor: `rgb(${c.tint})` }}
              />
            ))}
          </div>
        </Section>

        {room.hasShades && (
          <Section label="Shades">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-cream">{state.shades}% open</span>
              <div className="flex gap-2">
                <Chip active={state.shades === 0} onClick={() => patch({ shades: 0 })}>Close</Chip>
                <Chip active={state.shades === 100} onClick={() => patch({ shades: 100 })}>Open</Chip>
              </div>
            </div>
            <Slider value={state.shades} onChange={(v) => patch({ shades: v })} />
          </Section>
        )}

        <Section label="Audio">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-cream">{state.audioOn ? "Playing" : "Off"}</span>
            <button
              onClick={() => patch({ audioOn: !state.audioOn })}
              className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
                state.audioOn ? "bg-gold" : "bg-charcoal-500"
              }`}
              aria-pressed={state.audioOn}
            >
              <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-charcoal transition-all duration-300 ${state.audioOn ? "left-6" : "left-0.5"}`} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {AUDIO_SOURCES.map((a) => (
              <Chip key={a.id} active={state.audioSource === a.id} onClick={() => patch({ audioSource: a.id, audioOn: true })}>
                {a.name}
              </Chip>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[0.5rem] text-warm-gray tracking-widest uppercase">Vol</span>
            <Slider value={state.volume} onChange={(v) => patch({ volume: v })} />
          </div>
        </Section>

        {room.hasVideo && (
          <Section label="Video">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-cream">{state.videoOn ? "On" : "Standby"}</span>
              <button
                onClick={() => patch({ videoOn: !state.videoOn })}
                className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
                  state.videoOn ? "bg-gold" : "bg-charcoal-500"
                }`}
                aria-pressed={state.videoOn}
              >
                <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-charcoal transition-all duration-300 ${state.videoOn ? "left-6" : "left-0.5"}`} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {VIDEO_SOURCES.map((v) => (
                <Chip key={v.id} active={state.videoSource === v.id} onClick={() => patch({ videoSource: v.id, videoOn: true })}>
                  {v.name}
                </Chip>
              ))}
            </div>
          </Section>
        )}

        <Section label="Climate">
          <div className="flex items-center justify-between">
            <button onClick={() => patch({ temp: Math.max(60, state.temp - 1) })} className="w-9 h-9 border border-charcoal-500 text-cream hover:border-gold text-lg leading-none">−</button>
            <span className="font-display text-3xl text-cream font-light">{state.temp}°F</span>
            <button onClick={() => patch({ temp: Math.min(82, state.temp + 1) })} className="w-9 h-9 border border-charcoal-500 text-cream hover:border-gold text-lg leading-none">+</button>
          </div>
        </Section>
      </div>
    </div>
  );
}
