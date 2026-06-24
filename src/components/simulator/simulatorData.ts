// ─── Smart Home Simulator — configuration & types ───────────────────────────
// A fully client-side virtual home. Rooms each hold lighting, shade, audio, and
// video state; control interfaces (touch panel / remote) mutate it; the stage
// reacts in real time. Audio is synthesized with the Web Audio API; video uses
// public sample clips, so there are no asset dependencies to break.

export type RoomId = "living" | "theater" | "bedroom" | "outdoor";

export interface RoomConfig {
  id: RoomId;
  name: string;
  subtitle: string;
  backdrop: string;
  hasVideo: boolean;
  hasShades: boolean;
}

export const ROOMS: RoomConfig[] = [
  {
    id: "living",
    name: "Living Room",
    subtitle: "Great Room",
    backdrop:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85&fit=crop",
    hasVideo: true,
    hasShades: true,
  },
  {
    id: "theater",
    name: "Home Theater",
    subtitle: "Cinema",
    backdrop: "/images/home-theater.jpg",
    hasVideo: true,
    hasShades: false,
  },
  {
    id: "bedroom",
    name: "Primary Suite",
    subtitle: "Bedroom",
    backdrop:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&q=85&fit=crop",
    hasVideo: true,
    hasShades: true,
  },
  {
    id: "outdoor",
    name: "Outdoor Living",
    subtitle: "Terrace & Pool",
    backdrop:
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=1600&q=85&fit=crop",
    hasVideo: false,
    hasShades: false,
  },
];

// Lighting color presets — `tint` is an "R,G,B" string used for the overlay.
export interface LightColor {
  id: string;
  label: string;
  tint: string;
}

export const LIGHT_COLORS: LightColor[] = [
  { id: "warm", label: "Warm", tint: "255,176,84" },
  { id: "neutral", label: "Neutral", tint: "255,241,224" },
  { id: "cool", label: "Cool", tint: "150,194,255" },
  { id: "amber", label: "Amber", tint: "255,120,40" },
  { id: "violet", label: "Relax", tint: "168,120,230" },
  { id: "gold", label: "Gold", tint: "201,169,110" },
];

// Audio "stations" — each is a chord (Hz) the Web Audio engine retunes to.
export interface AudioSource {
  id: string;
  name: string;
  freqs: number[];
}

export const AUDIO_SOURCES: AudioSource[] = [
  { id: "ambient", name: "Ambient", freqs: [110.0, 164.81, 220.0] },
  { id: "jazz", name: "Lounge Jazz", freqs: [130.81, 196.0, 246.94] },
  { id: "classical", name: "Classical", freqs: [146.83, 220.0, 293.66] },
  { id: "chill", name: "Chillhop", freqs: [98.0, 146.83, 196.0] },
];

// Video sources — public sample clips (Google sample bucket).
export interface VideoSource {
  id: string;
  name: string;
  url: string;
}

const GTV = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample";
export const VIDEO_SOURCES: VideoSource[] = [
  { id: "cinema", name: "Cinema One", url: `${GTV}/BigBuckBunny.mp4` },
  { id: "studio", name: "Studio", url: `${GTV}/Sintel.mp4` },
  { id: "docu", name: "Documentary", url: `${GTV}/ElephantsDream.mp4` },
  { id: "action", name: "Action", url: `${GTV}/TearsOfSteel.mp4` },
];

// Per-room runtime state.
export interface RoomState {
  lightOn: boolean;
  brightness: number; // 0–100
  colorId: string;
  shades: number; // 0 (closed) – 100 (open)
  audioOn: boolean;
  audioSource: string;
  volume: number; // 0–100
  videoOn: boolean;
  videoSource: string;
  temp: number; // °F setpoint
}

export function defaultRoomState(): RoomState {
  return {
    lightOn: true,
    brightness: 75,
    colorId: "warm",
    shades: 100,
    audioOn: false,
    audioSource: "ambient",
    volume: 45,
    videoOn: false,
    videoSource: "cinema",
    temp: 71,
  };
}

// Scenes apply a partial patch to the active room.
export interface Scene {
  id: string;
  name: string;
  patch: Partial<RoomState>;
}

export const SCENES: Scene[] = [
  {
    id: "morning",
    name: "Morning",
    patch: { lightOn: true, brightness: 70, colorId: "neutral", shades: 100, audioOn: true, audioSource: "chill", videoOn: false },
  },
  {
    id: "day",
    name: "Day",
    patch: { lightOn: true, brightness: 95, colorId: "cool", shades: 100, audioOn: false, videoOn: false },
  },
  {
    id: "evening",
    name: "Evening",
    patch: { lightOn: true, brightness: 42, colorId: "warm", shades: 35, audioOn: true, audioSource: "jazz", videoOn: false },
  },
  {
    id: "movie",
    name: "Movie Night",
    patch: { lightOn: true, brightness: 10, colorId: "violet", shades: 0, audioOn: false, videoOn: true, videoSource: "cinema" },
  },
  {
    id: "party",
    name: "Entertain",
    patch: { lightOn: true, brightness: 58, colorId: "amber", shades: 55, audioOn: true, audioSource: "ambient", videoOn: false },
  },
  {
    id: "goodnight",
    name: "Goodnight",
    patch: { lightOn: false, brightness: 0, shades: 0, audioOn: false, videoOn: false },
  },
];

export const tintOf = (id: string) =>
  LIGHT_COLORS.find((c) => c.id === id)?.tint ?? "255,241,224";
export const audioName = (id: string) =>
  AUDIO_SOURCES.find((a) => a.id === id)?.name ?? id;
export const videoOf = (id: string) =>
  VIDEO_SOURCES.find((v) => v.id === id) ?? VIDEO_SOURCES[0];
