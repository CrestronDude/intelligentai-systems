import { ImageResponse } from "next/og";

export const alt =
  "AI Intelligent Services — Premium Smart Home & Corporate AV";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0C0C0C 0%, #141414 60%, #1C1C1C 100%)",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top: brand mark */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              border: "1.5px solid #C9A96E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background: "#C9A96E",
              }}
            />
          </div>
          <div
            style={{
              color: "#F5F0E8",
              fontSize: "26px",
              letterSpacing: "2px",
            }}
          >
            AI INTELLIGENT SERVICES
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#C9A96E",
              fontSize: "22px",
              letterSpacing: "6px",
              marginBottom: "20px",
              fontFamily: "sans-serif",
            }}
          >
            SMART HOME · CORPORATE AV
          </div>
          <div style={{ color: "#F5F0E8", fontSize: "76px", lineHeight: 1.05 }}>
            Where technology meets
          </div>
          <div style={{ color: "#C9A96E", fontSize: "76px", lineHeight: 1.05 }}>
            architecture.
          </div>
        </div>

        {/* Bottom: brands + domain */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #3C3C3C",
            paddingTop: "28px",
          }}
        >
          <div
            style={{
              color: "#7A7670",
              fontSize: "22px",
              letterSpacing: "1px",
              fontFamily: "sans-serif",
            }}
          >
            Crestron · Q-SYS · Lutron · JBL · Sonance
          </div>
          <div
            style={{
              color: "#C9A96E",
              fontSize: "24px",
              fontFamily: "sans-serif",
            }}
          >
            intelligentai.systems
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
