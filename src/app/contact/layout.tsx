import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Consultation",
  description:
    "Request a complimentary consultation for your smart home or corporate AV project. Serving the Greater Toronto Area and Canada-wide. Response within one business day.",
  openGraph: {
    title: "Let's Build Something Extraordinary | AI Intelligent Services",
    description:
      "Request a complimentary smart home or corporate AV consultation. Response within one business day.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
