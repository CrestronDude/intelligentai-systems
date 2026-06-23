import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Projects & Case Studies",
  description:
    "A portfolio of luxury residential and corporate AV integration projects across Toronto and Canada — smart homes, home theaters, and enterprise boardrooms. 500+ completed installations.",
  openGraph: {
    title: "Our Work — Residential & Corporate Case Studies",
    description:
      "Luxury smart home and corporate AV case studies from AI Intelligent Services.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
