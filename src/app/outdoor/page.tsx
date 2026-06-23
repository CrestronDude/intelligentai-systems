import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SpaceWalkthrough, { type Space } from "@/components/shared/SpaceWalkthrough";

export const metadata: Metadata = {
  title: "Outdoor Living",
  description:
    "Luxury outdoor automation across the Greater Toronto Area and Canada-wide — invisible landscape audio by Sonance and JBL, architectural exterior lighting control, automated gates and access control, and full pool, spa, and environment control.",
};

const spaces: Space[] = [
  {
    number: "01",
    label: "Landscape Audio",
    title: "Sound that hides",
    titleAccent: "in the garden",
    body: "Camouflaged satellite speakers tuck among the planting while buried subwoofers deliver full, even bass — no boxes, no compromise. We pair Sonance Landscape Series with JBL's weatherproof Control 80 Series and tune every zone to the terrain.",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1920&q=85&fit=crop",
    imageAlt: "Luxury poolside terrace with concealed landscape audio",
    features: [
      "Camouflaged satellites & buried subwoofers",
      "Even, immersive coverage tuned to the site",
      "Marine-grade, all-weather construction",
    ],
    tags: ["Sonance Landscape", "JBL Control 80", "Crestron"],
  },
  {
    number: "02",
    label: "Exterior Lighting",
    title: "The property,",
    titleAccent: "transformed after dark",
    body: "Architectural façade lighting, illuminated pathways, uplit trees, and glowing water features — choreographed into scenes that shift with the evening. An astronomic timeclock follows sunset through the seasons; one touch sets the mood.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1920&q=85&fit=crop",
    imageAlt: "Luxury home glowing with architectural exterior lighting at dusk",
    features: [
      "Architectural façade & soffit lighting",
      "Path, step & landscape illumination",
      "Astronomic timeclock & warm-dim scenes",
    ],
    tags: ["Lutron Ketra", "Coastal Source", "Crestron"],
  },
  {
    number: "03",
    label: "Gates & Access",
    title: "Arrive to",
    titleAccent: "open gates",
    body: "Automated driveway and pedestrian gates open as you approach by geofence, while video intercom at the gate and door lets you admit visitors from anywhere. Keypad, fob, smartphone, and plate entry integrate with your cameras and alarm.",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=85&fit=crop",
    imageAlt: "Modern estate entrance with automated gate and driveway",
    features: [
      "Automated driveway & pedestrian gates",
      "Video intercom with remote release",
      "Geofence-triggered arrival sequences",
    ],
    tags: ["Crestron", "Alarm.com", "DoorBird", "LiftMaster"],
  },
  {
    number: "04",
    label: "Pool, Spa & Environment",
    title: "The whole environment,",
    titleAccent: "one touch",
    body: "Pool, spa, water features, heaters, and misting — unified on the same interface that runs your home. Warm the spa before you leave the office, drop the pool into an evening scene, and let an away mode manage everything while you travel.",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&q=85&fit=crop",
    imageAlt: "Modern luxury villa with pool and terrace at dusk",
    features: [
      "Pool, spa & water-feature control",
      "Automated heating & temperature",
      "Outdoor climate, misting & patio heaters",
    ],
    tags: ["Pentair ScreenLogic", "Crestron Home", "Lutron", "Jandy"],
  },
];

// Compact systems recap kept below the walkthrough so the spec detail remains
// crawlable and skimmable (the walkthrough is image-led).
const systemsRecap = spaces.map((s) => ({
  label: s.label,
  tags: s.tags ?? [],
}));

export default function OutdoorPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[68vh] min-h-[480px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=1920&q=85&fit=crop"
            alt="Luxury pool and terrace at sunset"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-charcoal/45" />
        </div>
        <div className="relative z-10 container-luxury pb-16 w-full">
          <span className="text-label text-gold block mb-4">Outdoor Living</span>
          <h1 className="text-display-lg text-cream mb-6">
            The experience
            <br />
            <em className="text-gold not-italic">extends outdoors.</em>
          </h1>
          <p className="text-base text-warm-gray max-w-xl leading-relaxed mb-8">
            Pools, terraces, gardens, and gates — orchestrated with the same
            precision as the home within. Scroll to walk through the grounds.
          </p>
          <span className="inline-flex items-center gap-3 text-label text-cream-muted">
            <span className="w-8 h-px bg-gold" />
            Begin the walkthrough
          </span>
        </div>
      </section>

      {/* Scroll-driven walkthrough of the outdoor spaces */}
      <SpaceWalkthrough spaces={spaces} eyebrow="Outdoor Living" />

      {/* Systems recap */}
      <section className="section-padding bg-charcoal border-t border-charcoal-500">
        <div className="container-luxury">
          <div className="max-w-2xl mb-14">
            <span className="text-label text-gold block mb-4">Beyond the Walls</span>
            <h2 className="text-display-md text-cream mb-6">
              Every outdoor system, engineered as one.
            </h2>
            <p className="text-warm-gray text-base leading-relaxed">
              From concealed Sonance and JBL landscape audio to Lutron and Ketra
              exterior lighting, automated gates and access control, and full pool
              and spa integration — designed, installed, and calibrated to feel
              effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-500">
            {systemsRecap.map((s) => (
              <div key={s.label} className="bg-charcoal px-7 py-9">
                <span className="block w-8 h-px bg-gold mb-5" />
                <h3 className="font-display text-xl text-cream font-light mb-4 leading-snug">
                  {s.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-warm-gray border border-charcoal-500 px-3 py-1.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-gold">
        <div className="container-luxury text-center">
          <h2 className="font-display text-4xl text-charcoal font-light mb-4">
            Bring it all outdoors.
          </h2>
          <p className="text-charcoal/70 mb-8 text-sm max-w-md mx-auto">
            From poolside soundscapes to gated arrivals, we design outdoor
            environments that work flawlessly. Every engagement begins with a
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
