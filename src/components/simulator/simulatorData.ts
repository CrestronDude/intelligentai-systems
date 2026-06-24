// ─── Smart Home Simulator — configuration & types ───────────────────────────
// A photoreal virtual home. Each room's controllable elements are mapped to
// their ACTUAL location in the room photo: the theater's video plays on the real
// screen; living/bedroom motorized shades sit over the real windows. Lighting
// dims the real fixtures via brightness. Audio & video are real, self-hosted
// files under /public/media.

export interface Rect {
  left: number;
  top: number;
  width: number;
  height: number;
}

export type RoomId = "theater" | "living" | "bedroom" | "outdoor";

export interface RoomConfig {
  id: RoomId;
  name: string;
  subtitle: string;
  backdrop: string;
  hasVideo: boolean;
  hasShades: boolean;
  screen?: Rect; // where the display lives in the photo (%)
  window?: Rect; // where the powered shade covers the window (%)
}

export const ROOMS: RoomConfig[] = [
  {
    id: "theater",
    name: "Home Theater",
    subtitle: "Cinema",
    backdrop: "/images/home-theater.jpg",
    hasVideo: true,
    hasShades: false,
    screen: { left: 18.7, top: 8.5, width: 62, height: 46.5 },
  },
  {
    id: "living",
    name: "Living Room",
    subtitle: "Great Room",
    backdrop:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85&fit=crop",
    hasVideo: false,
    hasShades: true,
    window: { left: 1, top: 3, width: 31, height: 86 },
  },
  {
    id: "bedroom",
    name: "Primary Suite",
    subtitle: "Bedroom",
    backdrop:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&q=85&fit=crop",
    hasVideo: false,
    hasShades: true,
    window: { left: 62, top: 17, width: 35, height: 57 },
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

// Audio "stations" → real, self-hosted tracks.
export interface AudioSource {
  id: string;
  name: string;
  file: string;
}

export const AUDIO_SOURCES: AudioSource[] = [
  { id: "chill", name: "Chillhop", file: "/media/audio/track-1.mp3" },
  { id: "lounge", name: "Lounge", file: "/media/audio/track-2.mp3" },
  { id: "energy", name: "Uptempo", file: "/media/audio/track-3.mp3" },
];

// Video sources → real, self-hosted clips.
export interface VideoSource {
  id: string;
  name: string;
  url: string;
}

export const VIDEO_SOURCES: VideoSource[] = [
  { id: "cinema", name: "Cinema One", url: "/media/video/cinema.mp4" },
  { id: "nature", name: "Nature", url: "/media/video/nature.mp4" },
  { id: "studio", name: "Studio", url: "/media/video/studio.mp4" },
];

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
  temp: number; // °F
}

export function defaultRoomState(): RoomState {
  return {
    lightOn: true,
    brightness: 75,
    colorId: "warm",
    shades: 100,
    audioOn: false,
    audioSource: "chill",
    volume: 45,
    videoOn: false,
    videoSource: "cinema",
    temp: 71,
  };
}

export interface Scene {
  id: string;
  name: string;
  patch: Partial<RoomState>;
}

export const SCENES: Scene[] = [
  { id: "morning", name: "Morning", patch: { lightOn: true, brightness: 70, colorId: "neutral", shades: 100, audioOn: true, audioSource: "chill", videoOn: false } },
  { id: "day", name: "Day", patch: { lightOn: true, brightness: 95, colorId: "cool", shades: 100, audioOn: false, videoOn: false } },
  { id: "evening", name: "Evening", patch: { lightOn: true, brightness: 42, colorId: "warm", shades: 35, audioOn: true, audioSource: "lounge", videoOn: false } },
  { id: "movie", name: "Movie Night", patch: { lightOn: true, brightness: 9, colorId: "violet", shades: 0, audioOn: false, videoOn: true, videoSource: "cinema" } },
  { id: "party", name: "Entertain", patch: { lightOn: true, brightness: 58, colorId: "amber", shades: 55, audioOn: true, audioSource: "energy", videoOn: false } },
  { id: "goodnight", name: "Goodnight", patch: { lightOn: false, brightness: 0, shades: 0, audioOn: false, videoOn: false } },
];

export const tintOf = (id: string) =>
  LIGHT_COLORS.find((c) => c.id === id)?.tint ?? "255,241,224";
export const audioName = (id: string) =>
  AUDIO_SOURCES.find((a) => a.id === id)?.name ?? id;
export const audioFileOf = (id: string) =>
  AUDIO_SOURCES.find((a) => a.id === id)?.file ?? AUDIO_SOURCES[0].file;
export const videoOf = (id: string) =>
  VIDEO_SOURCES.find((v) => v.id === id) ?? VIDEO_SOURCES[0];
