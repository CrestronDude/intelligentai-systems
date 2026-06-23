import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { concealSpeakers, daSeries } from "@/lib/data/jbl";
import SpaceWalkthrough, { type Space } from "@/components/shared/SpaceWalkthrough";

// Scroll-driven walk through the rooms where invisible sound lives.
const rooms: Space[] = [
  {
    number: "01",
    label: "Living Room",
    title: "The room",
    titleAccent: "is the speaker",
    body: "A pair of CONCEAL loudspeakers vanish into the walls and finish over with paint — nothing on display, yet full-range sound fills the entire room. The architecture stays pure; the music seems to come from everywhere.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85&fit=crop",
    imageAlt: "Modern luxury living room with no visible speakers",
    features: [
      "Flush-mount, paintable Fidelity Glass™ skin",
      "Full-range sound with zero visible hardware",
    ],
    tags: ["Conceal C62", "Conceal C83"],
  },
  {
    number: "02",
    label: "Home Theater",
    title: "Cinema,",
    titleAccent: "unseen",
    body: "The flagship C86 delivers reference LCR performance from behind the wall, while the C82W invisible subwoofer brings deep, tactile bass — a complete Dolby Atmos foundation with not a single speaker grille in sight.",
    image:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1920&q=85&fit=crop",
    imageAlt: "Luxury home theater with invisible architectural audio",
    features: [
      "Reference LCR from the flagship C86",
      "Invisible C82W subwoofer for tactile bass",
    ],
    tags: ["Conceal C86", "Conceal C82W"],
  },
  {
    number: "03",
    label: "Primary Suite",
    title: "Wake to music,",
    titleAccent: "not hardware",
    body: "Discreet, room-filling audio in the primary suite — finished seamlessly into the ceiling and walls so nothing interrupts the calm. Paired with circadian lighting and shading on one interface.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&q=85&fit=crop",
    imageAlt: "Luxury primary bedroom suite with concealed audio",
    features: [
      "Seamless in-ceiling integration",
      "Tuned for intimate, even coverage",
    ],
    tags: ["Conceal C62"],
  },
  {
    number: "04",
    label: "Spa & Wet Areas",
    title: "Sound where speakers",
    titleAccent: "can't be seen",
    body: "Spa baths, steam rooms, and wet areas are exactly where visible speakers fail — and where invisible audio excels. CONCEAL finishes behind the surface, tolerant of moisture and heat, for a true sanctuary.",
    image:
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=1920&q=85&fit=crop",
    imageAlt: "Luxury spa bathroom with concealed audio",
    features: [
      "Finished behind tile, stone & plaster",
      "Moisture- and heat-tolerant placement",
    ],
    tags: ["Conceal C62", "Conceal C83"],
  },
];

export const metadata: Metadata = {
  title: "Invisible Audio — JBL CONCEAL",
  description:
    "Authorized JBL dealer. The JBL CONCEAL series of fully invisible, paintable in-wall and in-ceiling loudspeakers — C62, C83, C86 and C82W — plus JBL DA Series distribution amplifiers. Architectural sound you hear but never see.",
};

export default function InvisibleAudioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[62vh] min-h-[460px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=85&fit=crop"
            alt="Luxury living room with no visible speakers"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-charcoal/55" />
        </div>
        <div className="relative z-10 container-luxury pb-16 w-full">
          <span className="text-label text-gold block mb-4">
            Invisible Audio · Authorized JBL Dealer
          </span>
          <h1 className="text-display-lg text-cream mb-6">
            Sound you hear.
            <br />
            <em className="text-gold not-italic">Never see.</em>
          </h1>
          <p className="text-base text-warm-gray max-w-xl leading-relaxed">
            The JBL CONCEAL series disappears completely into your walls and
            ceilings — finished over with paint, wallpaper, or veneer — while
            delivering full, architectural sound. No grilles. No compromise.
            Just music that seems to come from everywhere and nowhere at once.
          </p>
          <span className="inline-flex items-center gap-3 text-label text-cream-muted mt-8">
            <span className="w-8 h-px bg-gold" />
            Scroll to walk through the rooms
          </span>
        </div>
      </section>

      {/* Scroll-driven walk through the rooms where invisible sound lives */}
      <SpaceWalkthrough spaces={rooms} eyebrow="Invisible Audio" />

      {/* Series intro */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <div className="max-w-3xl mb-16 animate-fade-up">
            <span className="text-label text-gold block mb-4">The CONCEAL Series</span>
            <h2 className="text-display-md text-cream mb-6">
              Engineered to vanish. Tuned to perform.
            </h2>
            <p className="text-warm-gray text-base leading-relaxed">
              Every CONCEAL loudspeaker is built around a patented
              compression-molded baffle and a paintable Fidelity Glass™ outer
              skin with an integrated rear enclosure. The result installs flush
              to the surface and finishes invisibly — yet sounds like
              full-bandwidth high-fidelity audio. As an authorized JBL dealer, we
              specify, install, and calibrate every model to the room.
            </p>
          </div>

          {/* Speaker grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {concealSpeakers.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="card-gradient border border-charcoal-500 p-8 md:p-10 flex flex-col group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] mb-8 overflow-hidden bg-charcoal-800/60">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.10),transparent_70%)]" />
                  <Image
                    src={s.image}
                    alt={`JBL ${s.name} invisible loudspeaker`}
                    fill
                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {s.flagship && (
                    <span className="absolute top-4 left-4 text-label text-[0.55rem] text-gold border border-gold/40 px-3 py-1 bg-charcoal/60 backdrop-blur-sm">
                      Flagship
                    </span>
                  )}
                </div>

                {/* Header */}
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-display text-3xl text-cream font-light leading-none">
                    {s.name}
                  </h3>
                  <span className="text-label text-gold text-[0.6rem] flex-shrink-0">
                    {s.model}
                  </span>
                </div>
                <span className="text-label text-warm-gray text-[0.6rem] block mb-5">
                  {s.tagline}
                </span>
                <p className="text-warm-gray text-sm leading-relaxed mb-8">
                  {s.description}
                </p>

                {/* Specs */}
                <div className="mt-auto">
                  <dl className="border-t border-charcoal-500">
                    {s.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-start justify-between gap-6 py-2.5 border-b border-charcoal-600"
                      >
                        <dt className="text-[0.6rem] uppercase tracking-[0.15em] text-warm-gray flex-shrink-0">
                          {spec.label}
                        </dt>
                        <dd className="text-xs text-cream-muted text-right">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="flex items-start gap-2 mt-5">
                    <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span className="text-xs text-cream-muted">
                      <span className="text-warm-gray">Best for — </span>
                      {s.bestFor}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DA Series amplifiers */}
      <section id="da-series" className="section-padding bg-charcoal-800">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[3/2] overflow-hidden card-gradient border border-charcoal-500 order-2 lg:order-1">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.08),transparent_70%)]" />
              <Image
                src={daSeries.image}
                alt="JBL DA850 distribution amplifier"
                fill
                className="object-contain p-10"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="text-label text-gold block mb-4">
                Amplification · JBL DA Series
              </span>
              <h2 className="text-display-md text-cream mb-6">
                The power behind the silence.
              </h2>
              <p className="text-warm-gray text-base leading-relaxed mb-8">
                {daSeries.intro}
              </p>

              {/* Model tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {daSeries.models.map((amp) => (
                  <div
                    key={amp.id}
                    className="border border-charcoal-500 p-5 hover:border-gold/40 transition-colors duration-300"
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="font-display text-xl text-cream font-light">
                        {amp.model}
                      </span>
                      <span className="text-label text-gold text-[0.55rem]">
                        {amp.zones}
                      </span>
                    </div>
                    <span className="text-[0.6rem] uppercase tracking-[0.15em] text-warm-gray block mb-3">
                      {amp.channels}
                    </span>
                    <p className="text-xs text-cream-muted leading-relaxed">
                      {amp.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Shared specs */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {daSeries.sharedSpecs.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-cream-muted">
                    <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-gold">
        <div className="container-luxury text-center">
          <h2 className="font-display text-4xl text-charcoal font-light mb-4">
            Hear what invisible sounds like.
          </h2>
          <p className="text-charcoal/70 mb-8 text-sm max-w-md mx-auto">
            We design, install, and calibrate JBL CONCEAL systems across the
            Greater Toronto Area and Canada-wide. Every engagement begins with a
            complimentary consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-charcoal text-cream text-label hover:bg-charcoal-700 transition-colors duration-300"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
