import type { Metadata } from "next";
import Simulator from "@/components/simulator/Simulator";

export const metadata: Metadata = {
  title: "Smart Home Simulator",
  description:
    "Experience an AI Intelligent Services smart home live. Switch between a touch panel and handheld remote to control lighting, shades, multi-room audio, and video across a virtual home — scenes, sources, and playback respond in real time.",
};

export default function SimulatorPage() {
  return (
    <>
      {/* Intro */}
      <section className="relative pt-36 pb-10 bg-charcoal">
        <div className="container-luxury" data-reveal>
          <span className="text-label text-gold block mb-4">
            Interactive Demo · Smart Home Simulator
          </span>
          <h1 className="text-display-lg text-cream mb-5">
            Take the controls.
            <br />
            <em className="text-gold not-italic">Live the home.</em>
          </h1>
          <p className="text-base text-warm-gray max-w-2xl leading-relaxed">
            This is a working simulation of a system we&apos;d build for you. Choose a
            control interface — a Crestron-style <strong className="text-cream-muted font-normal">touch panel</strong> or a
            handheld <strong className="text-cream-muted font-normal">remote</strong> — then move between rooms and trigger scenes.
            Lighting, motorized shades, multi-room audio, and video all respond in
            real time, with live sound and on-screen playback.
          </p>
        </div>
      </section>

      {/* The simulator */}
      <section className="pb-20 bg-charcoal">
        <div className="container-luxury">
          <Simulator />
          <p className="text-[0.6rem] text-warm-gray tracking-wide mt-4 text-center">
            Audio is generated live in your browser · video uses sample clips · best
            experienced with sound on.
          </p>
        </div>
      </section>
    </>
  );
}
