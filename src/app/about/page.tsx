import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CahoniLink from "@/components/ui/CahoniLink";
import { certificationGroups, affiliations } from "@/lib/data/certifications";

export const metadata: Metadata = {
  title: "About",
  description:
    "Design Engineer at Telus Canada and Microsoft Teams Engineer at Nestlé Canada. Crestron, RTI, Q-SYS, AMX, Extron, Biamp, Lutron, and Microsoft 365 Collaboration Communications (Teams) certified — serving Toronto and across Canada with AI Intelligent Services.",
};

const milestones: { year: string; event: React.ReactNode }[] = [
  { year: "2009", event: "First Crestron programming certification — residential automation specialist" },
  { year: "2011", event: "Design Engineer role at Telus Canada, Toronto — enterprise-scale AV & structured cabling" },
  { year: "2013", event: "Q-SYS commercial audio/video certification — corporate AV integration" },
  { year: "2014", event: "Lutron RadioRA & Ketra tunable-lighting certification" },
  { year: "2015", event: "RTI Master Programmer certification achieved" },
  { year: "2016", event: "Meeting Room Technology / Microsoft Teams Engineer at Nestlé Canada — enterprise Microsoft Teams Rooms deployments" },
  { year: "2017", event: "Extron XTP Systems Technician & AMX Networked AV technician certifications" },
  { year: "2018", event: "AI Intelligent Services formally founded" },
  { year: "2019", event: "Biamp TesiraFORTÉ DSP certification" },
  { year: "2020", event: "Corporate AV expansion — Crestron, AMX, and Q-SYS enterprise clients" },
  { year: "2023", event: "Microsoft 365 Certified: Collaboration Communications Systems Engineer (Teams)" },
  {
    year: "2022",
    event: (
      <>
        Launched <CahoniLink /> — quoting platform for AV integrators and trades
      </>
    ),
  },
  { year: "2024", event: "500+ projects delivered across residential and commercial sectors" },
];

const values: { title: string; description: React.ReactNode }[] = [
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
    description: (
      <>
        We are active in the industry — attending ISE and CEDIA, testing new platforms,
        and building proprietary software tools like <CahoniLink /> before the market catches up.
      </>
    ),
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
            <div data-reveal>
              <span className="text-label text-gold block mb-6">Our Story</span>
              <h2 className="text-display-md text-cream mb-8">
                15 years of mastery,
                <br />
                one project at a time
              </h2>
              <div className="space-y-5 text-warm-gray text-base leading-relaxed">
                <p>
                  AI Intelligent Services was founded by a Crestron, RTI, AMX, and Q-SYS
                  certified programmer with over 15 years of hands-on experience across
                  residential and commercial AV integration in Canada and beyond.
                </p>
                <p>
                  A background as Design Engineer at Telus Canada — and as Meeting
                  Room Technology / Microsoft Teams Engineer at Nestlé Canada — gave us
                  the enterprise-grade discipline that defines every project we touch.
                  From the cabling standards in a Rosedale estate to Microsoft Teams
                  Rooms and Q-SYS DSP architecture deployed across a Fortune 500 campus,
                  the same rigor applies.
                </p>
                <p>
                  Few integrators bring both worlds together: the boutique craft of
                  luxury residential automation and the discipline of enterprise
                  meeting-room engineering. Having engineered Microsoft Teams Rooms and
                  AV for one of the world&apos;s largest companies — and programmed some
                  of Canada&apos;s finest homes — we hold a single boardroom and a
                  17,000 sq ft estate to the very same uncompromising standard. That is
                  why discerning clients choose AI Intelligent Services.
                </p>
                <p>
                  Today, AI Intelligent Services delivers Crestron, RTI, Q-SYS, and AMX
                  integrations for discerning homeowners, architects, and corporate
                  facility managers who refuse to compromise on quality.
                </p>
                <p>
                  We also develop software. <CahoniLink /> is our proprietary quoting and
                  proposal platform, built for AV integrators and trades to generate
                  accurate, professional proposals in minutes — and now available as a
                  white-label software development service for integrator firms.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div data-reveal="right" data-reveal-delay={120}>
              <div className="relative aspect-[4/5] mb-8 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80&fit=crop"
                  alt="AI Intelligent Services — Toronto"
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

              {/* Telus credential */}
              <div className="mt-4 border border-charcoal-500 bg-charcoal-700 p-5 flex items-start gap-4">
                <div className="w-1 self-stretch bg-gold flex-shrink-0" />
                <div>
                  <span className="text-label text-gold text-[0.6rem] block mb-1">Career Background</span>
                  <span className="text-cream text-sm block">Meeting Room Technology / Microsoft Teams Engineer — Nestlé Canada</span>
                  <span className="text-cream text-sm block mt-1.5">Design Engineer — Telus Canada</span>
                  <span className="text-warm-gray text-xs">Toronto, Ontario</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cahoni AI */}
      <section className="section-padding bg-charcoal-800">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video overflow-hidden" data-reveal="left">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85&fit=crop"
                alt="Cahoni AI quoting platform"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-charcoal/30" />
              <div className="absolute bottom-6 left-6">
                <span className="glass border border-gold/30 px-5 py-3 text-label text-gold text-[0.65rem]">
                  Software Development Service
                </span>
              </div>
            </div>
            <div data-reveal="right" data-reveal-delay={120}>
              <span className="text-label text-gold block mb-4">Built by Integrators</span>
              <h2 className="text-display-md text-cream mb-6">
                <CahoniLink>Cahoni AI</CahoniLink>
              </h2>
              <p className="text-warm-gray text-base leading-relaxed mb-6">
                <CahoniLink /> is a proprietary quoting and project management platform
                developed by AI Intelligent Services for AV integrators, trades, and
                technology contractors. Stop building quotes in spreadsheets. Generate
                accurate, professional, custom-branded proposals in minutes.
              </p>
              <p className="text-warm-gray text-sm leading-relaxed mb-8">
                Available as a white-label software development service — we build and
                deploy a fully branded version of <CahoniLink /> for your firm, complete
                with your catalogue, pricing, and proposal templates.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="https://intelligentai.services/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-shimmer inline-flex items-center gap-3 px-8 py-3 bg-gold text-charcoal text-label hover:bg-gold-light transition-colors duration-300"
                >
                  Visit Cahoni AI ↗
                </a>
                <Link
                  href="/contact"
                  className="text-label text-cream-muted hover:text-gold transition-colors duration-300 text-sm"
                >
                  Enquire About White-Label
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <div className="max-w-xl mb-16" data-reveal>
            <span className="text-label text-gold block mb-4">Our Philosophy</span>
            <h2 className="text-display-md text-cream">
              The values that define
              every project
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal-500">
            {values.map((v, i) => (
              <div
                key={v.title}
                data-reveal
                data-reveal-delay={i * 100}
                className="bg-charcoal p-10 md:p-12 group hover:bg-charcoal-700 transition-colors duration-300"
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
      <section className="section-padding bg-charcoal-800">
        <div className="container-luxury">
          <div className="max-w-xl mb-16" data-reveal>
            <span className="text-label text-gold block mb-4">Our Journey</span>
            <h2 className="text-display-md text-cream">
              15 years of milestones
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-charcoal-500" />
            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <div key={i} data-reveal="left" data-reveal-delay={i * 70} className="flex items-start gap-8">
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
      <section className="section-padding bg-charcoal-700">
        <div className="container-luxury">
          <div className="max-w-2xl mb-14" data-reveal>
            <span className="text-label text-gold block mb-4">
              Certifications & Training
            </span>
            <h2 className="text-display-md text-cream mb-6">
              Credentials that back
              <br />
              every claim.
            </h2>
            <p className="text-warm-gray text-base leading-relaxed mb-5">
              More than two dozen manufacturer-level certifications across control,
              lighting, audio, DSP, conferencing, networking, and AI — earned
              directly from the companies that build these platforms, from Crestron
              and RTI to Q-SYS, Lutron, Biamp, Extron, and Microsoft.
            </p>
            <p className="text-warm-gray text-base leading-relaxed">
              That breadth is the difference. The same engineer who programs your
              Crestron and Lutron scenes also commissions your Q-SYS DSP, certifies
              your Microsoft Teams Rooms, and terminates the fiber backbone they all
              run on — so nothing is sub-contracted, nothing is lost in translation,
              and every layer is accountable to one certified specialist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-500">
            {certificationGroups.map((group, gi) => (
              <div
                key={group.category}
                data-reveal
                data-reveal-delay={gi * 90}
                className="bg-charcoal-700 p-8 md:p-9"
              >
                <div className="w-6 h-px bg-gold mb-5" />
                <h3 className="font-display text-xl text-cream font-light mb-6 leading-snug">
                  {group.category}
                </h3>
                <ul className="flex flex-col gap-4">
                  {group.items.map((c) => (
                    <li key={c.name} className="flex flex-col">
                      <span className="text-sm text-cream-muted leading-snug">
                        {c.name}
                      </span>
                      <span className="text-[0.55rem] text-gold uppercase tracking-[0.18em] mt-1">
                        {c.issuer}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Affiliations & background */}
          <div className="mt-12 flex flex-wrap gap-3" data-reveal>
            {affiliations.map((a) => (
              <span
                key={a}
                className="text-label text-gold border border-gold/30 px-4 py-2 text-[0.65rem]"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-charcoal">
        <div className="container-luxury text-center" data-reveal>
          <h2 className="font-display text-4xl text-cream font-light mb-4">
            Ready to work with us?
          </h2>
          <p className="text-warm-gray mb-8 text-sm">
            Every engagement begins with a complimentary consultation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/contact"
              className="btn-gold-shimmer inline-flex items-center gap-3 px-10 py-4 bg-gold text-charcoal text-label hover:bg-gold-light transition-colors duration-300"
            >
              Get in Touch
            </Link>
            <a
              href="tel:+16472723150"
              className="text-label text-cream-muted hover:text-gold transition-colors duration-300"
            >
              647-272-3150
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
