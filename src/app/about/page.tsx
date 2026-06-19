import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "15+ years of Crestron, RTI, and Q-SYS programming expertise. Learn about AI Intelligent Services and founder Steven's story.",
};

const milestones = [
  { year: "2009", event: "First Crestron programming certification obtained" },
  { year: "2012", event: "Expanded into Q-SYS commercial audio/video integration" },
  { year: "2015", event: "RTI Master Programmer certification achieved" },
  { year: "2018", event: "AI Intelligent Services formally founded" },
  { year: "2020", event: "Completed 200th full-home Crestron installation" },
  { year: "2022", event: "Launched Cahoni AI integration platform" },
  { year: "2024", event: "500+ projects delivered across residential & commercial" },
];

const values = [
  {
    title: "Precision",
    description:
      "Every line of code, every cable run, every programming decision is made with deliberate care. We don't cut corners because our clients' standards don't allow for it.",
  },
  {
    title: "Discretion",
    description:
      "We operate in private homes and executive offices. Our team is trained to work invisibly, treat confidential spaces with respect, and keep client details strictly private.",
  },
  {
    title: "Longevity",
    description:
      "A system installed today should still perform beautifully in ten years. We design for durability, document everything, and build relationships that outlast individual projects.",
  },
  {
    title: "Innovation",
    description:
      "We are active in the industry — attending ISE and CEDIA, testing new platforms, and integrating AI tools before they become mainstream. Our clients benefit from being ahead.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=85&fit=crop"
            alt="Luxury smart home interior"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/65" />
        </div>
        <div className="relative z-10 container-luxury pb-16 w-full">
          <span className="text-label text-gold block mb-4">About Us</span>
          <h1 className="text-display-lg text-cream max-w-2xl">
            Built on expertise.
            <br />
            <em className="text-gold not-italic">Driven by excellence.</em>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="text-label text-gold block mb-6">Our Story</span>
              <h2 className="text-display-md text-cream mb-8">
                15 years of mastery,
                <br />
                one project at a time
              </h2>
              <div className="space-y-5 text-warm-gray text-base leading-relaxed">
                <p>
                  AI Intelligent Services was founded by Steven, a Crestron,
                  RTI, and Q-SYS certified programmer with over 15 years of
                  hands-on experience in premium residential and commercial AV
                  integration.
                </p>
                <p>
                  What began as a deep passion for programming complex automation
                  systems evolved into a full-service integration firm serving
                  discerning homeowners, architects, and facility managers who
                  refuse to compromise on quality.
                </p>
                <p>
                  Today, AI Intelligent Services is known for one thing above
                  all else: delivering systems that work flawlessly, look
                  invisible, and feel effortless — every time, on every project,
                  regardless of scale.
                </p>
                <p>
                  We were among the first integrators to actively integrate AI
                  tools — including Cahoni AI — into our workflow and client
                  systems, combining traditional programming excellence with
                  next-generation intelligence.
                </p>
              </div>
            </div>

            {/* Photo + Credentials */}
            <div>
              <div className="relative aspect-[4/5] mb-8 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80&fit=crop"
                  alt="AI Intelligent Services headquarters"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-charcoal/10" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "15+", label: "Years Experience" },
                  { value: "500+", label: "Projects" },
                  { value: "100%", label: "Certified" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-charcoal-700 border border-charcoal-500 p-5 text-center"
                  >
                    <span className="block font-display text-3xl text-gold font-light mb-1">
                      {s.value}
                    </span>
                    <span className="text-[0.6rem] text-warm-gray uppercase tracking-widest">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-charcoal-800">
        <div className="container-luxury">
          <div className="max-w-xl mb-16">
            <span className="text-label text-gold block mb-4">Our Philosophy</span>
            <h2 className="text-display-md text-cream">
              The values that define
              every project
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal-500">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-charcoal-800 p-10 md:p-12 group hover:bg-charcoal-700 transition-colors duration-300"
              >
                <div className="w-6 h-px bg-gold mb-6 group-hover:w-10 transition-all duration-300" />
                <h3 className="font-display text-2xl text-cream font-light mb-4">
                  {v.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <div className="max-w-xl mb-16">
            <span className="text-label text-gold block mb-4">Our Journey</span>
            <h2 className="text-display-md text-cream">
              15 years of milestones
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-charcoal-500" />
            <div className="flex flex-col gap-10">
              {milestones.map((m) => (
                <div key={m.year} className="flex items-start gap-8">
                  <div className="w-20 flex-shrink-0 text-right">
                    <span className="font-display text-lg text-gold font-light">
                      {m.year}
                    </span>
                  </div>
                  <div className="relative flex-shrink-0 mt-2">
                    <div className="w-2 h-2 rounded-full bg-gold relative z-10" />
                  </div>
                  <p className="text-sm text-cream-muted pt-0.5 leading-relaxed">
                    {m.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding-sm bg-charcoal-700">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-label text-gold block mb-3">
                Certified & Authorized
              </span>
              <p className="text-cream text-lg font-light">
                Active certifications with the platforms that matter most.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Crestron Certified",
                "RTI Master Programmer",
                "Q-SYS Design Partner",
                "Lutron Authorized",
                "CEDIA Member",
              ].map((cert) => (
                <span
                  key={cert}
                  className="text-label text-gold border border-gold/30 px-4 py-2 text-[0.65rem]"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-charcoal">
        <div className="container-luxury text-center">
          <h2 className="font-display text-4xl text-cream font-light mb-4">
            Ready to work with us?
          </h2>
          <p className="text-warm-gray mb-8 text-sm">
            Every engagement begins with a complimentary consultation.
          </p>
          <Link
            href="/contact"
            className="btn-gold-shimmer inline-flex items-center gap-3 px-10 py-4 bg-gold text-charcoal text-label hover:bg-gold-light transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
