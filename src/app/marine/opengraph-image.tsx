import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

// 1200×630 landscape share/link-preview card for /marine.
export const alt =
  "JBL Marine Audio, Internet & Satellite — professional on-site installation by AI Intelligent Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const bg = await readFile(join(process.cwd(), "public/images/marine-og-bg.jpg"));
  const bgSrc = `data:image/jpeg;base64,${bg.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", fontFamily: "sans-serif" }}>
        {/* Full-bleed marine background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={bgSrc} width={1200} height={630} alt="" style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 630, objectFit: "cover" }} />
        {/* Legibility overlays */}
        <div style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 630, display: "flex", background: "linear-gradient(90deg, rgba(6,14,24,0.92) 0%, rgba(6,14,24,0.6) 42%, rgba(6,14,24,0.1) 72%, rgba(6,14,24,0) 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 630, display: "flex", background: "linear-gradient(0deg, rgba(6,14,24,0.85) 0%, rgba(6,14,24,0) 48%)" }} />

        {/* Content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 56 }}>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", color: "#C9A96E", fontSize: 19, letterSpacing: 3, border: "1px solid rgba(201,169,110,0.55)", padding: "9px 16px" }}>
              AUTHORIZED JBL MARINE INSTALLER
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", color: "#C9A96E", fontSize: 21, letterSpacing: 3, marginBottom: 14 }}>
              AI INTELLIGENT SERVICES · MARINE
            </div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
              <span style={{ color: "#F5F0E8", fontSize: 58 }}>JBL Marine Audio, Internet</span>
              <span style={{ color: "#C9A96E", fontSize: 58 }}>&amp; Satellite Installations</span>
            </div>
            <div style={{ display: "flex", color: "#dbe4ee", fontSize: 23, marginTop: 18 }}>
              Starlink Maritime · Bell Marina Internet · On-Site Professional Installation
            </div>
            <div style={{ display: "flex", alignItems: "center", marginTop: 24 }}>
              <span style={{ color: "#C9A96E", fontSize: 42, fontWeight: 700 }}>(647) 272-3150</span>
              <span style={{ color: "#aebfce", fontSize: 20, marginLeft: 26 }}>intelligentai.systems · Serving Ontario</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
