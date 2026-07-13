import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

// 1200×630 landscape share/link-preview card for /marine.
export const alt =
  "JBL Marine Audio, Internet & Satellite — professional on-site installation by AI Intelligent Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Composite the JBL Marine ad poster into the right panel.
  const poster = await readFile(
    join(process.cwd(), "public/images/jbl-marine-audio.jpg")
  );
  const posterSrc = `data:image/jpeg;base64,${poster.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #081521 0%, #0b2036 60%, #0a1626 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Left: messaging */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 58px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", color: "#C9A96E", fontSize: 22, letterSpacing: 4 }}>
              AI INTELLIGENT SERVICES · MARINE
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: 26, lineHeight: 1.04 }}>
              <span style={{ color: "#F5F0E8", fontSize: 66 }}>JBL Marine Audio</span>
              <span style={{ color: "#C9A96E", fontSize: 66 }}>Internet &amp; Satellite</span>
            </div>
            <div style={{ display: "flex", color: "#d3dde8", fontSize: 27, marginTop: 26 }}>
              Professional on-site installation — we come to your boat.
            </div>
            <div style={{ display: "flex", color: "#9fb1c4", fontSize: 21, marginTop: 16 }}>
              Authorized JBL dealer · Starlink Maritime · Bell marina internet
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", color: "#C9A96E", fontSize: 48, fontWeight: 700 }}>
              (647) 272-3150
            </div>
            <div style={{ display: "flex", color: "#7f93a6", fontSize: 20, marginTop: 6 }}>
              intelligentai.systems · Serving Ontario
            </div>
          </div>
        </div>

        {/* Right: poster */}
        <div style={{ display: "flex", width: 452, height: 630 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={posterSrc} width={452} height={630} style={{ objectFit: "cover" }} alt="" />
        </div>
      </div>
    ),
    { ...size }
  );
}
