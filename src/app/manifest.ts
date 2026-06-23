import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AI Intelligent Services",
    short_name: "AI Intelligent",
    description:
      "Premium smart home automation and corporate AV integration. Crestron, RTI, Q-SYS, Lutron, JBL & Sonance specialists.",
    start_url: "/",
    display: "standalone",
    background_color: "#0C0C0C",
    theme_color: "#0C0C0C",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
