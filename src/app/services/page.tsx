import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { homeAutomationServices, corporateAVServices, aiServices } from "@/lib/data/services";
import CahoniLink from "@/components/ui/CahoniLink";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Crestron, RTI, Q-SYS, and Lutron smart home automation and corporate AV services. Expert programming and white-glove installation.",
};

function ServiceCard({ service }: { service: (typeof homeAutomationServices)[0] }) {
  return (
    <div className="group" id={service.id} data-reveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
        {/* Image */}
        <div className="relative h-72 lg:h-auto overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="image-luxury"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-charcoal/20" />
        </div>

        {/* Content */}
        <div className="bg-charcoal-700 p-10 md:p-14 flex flex-col justify-center">
          <span className="text-label text-gold text-[0.65rem] block mb-5">
            {service.subtitle}
          </span>
          <h3 className="font-display text-3xl md:text-4xl text-cream font-light mb-5 leading-tight">
            {service.title}
          </h3>
          <p className="text-warm-gray text-sm leading-relaxed mb-8">
            {service.description}
          </p>

          {/* Features */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-cream-muted">
                <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          {/* Systems */}
          <div>
            <span className="text-label text-warm-gray text-[0.6rem] block mb-3">
              Systems & Platforms
            </span>
            <div className="flex flex-wrap gap-2">
              {service.systems.map((s) => (
                <span
                  key={s}
                  className="text-xs text-warm-gray border border-charcoal-500 px-3 py-1.5"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85&fit=crop"
            alt="Luxury smart home interior"
            fill
            priority
            className="object-cover object-center hero-img-settle"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 container-luxury pb-16 w-full" data-reveal-stagger>
          <span className="text-label text-gold block mb-4">Our Services</span>
          <h1 className="text-display-lg text-cream">
            Expert integration.
            <br />
            <em className="text-gold not-italic">Exceptional results.</em>
          </h1>
        </div>
      </section>

      {/* Home Automation Section */}
      <section id="home-automation" className="section-padding bg-charcoal">
        <div className="container-luxury mb-16" data-reveal>
          <span className="text-label text-gold block mb-4">Residential</span>
          <h2 className="text-display-md text-cream max-w-xl">
            Smart Home Automation
          </h2>
        </div>
        <div className="flex flex-col gap-1">
          {homeAutomationServices.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      {/* Corporate AV Section */}
      <section id="corporate-av" className="section-padding bg-charcoal-800">
        <div className="container-luxury mb-16" data-reveal>
          <span className="text-label text-gold block mb-4">Commercial</span>
          <h2 className="text-display-md text-cream max-w-xl">
            Corporate AV Integration
          </h2>
        </div>
        <div className="flex flex-col gap-1">
          {corporateAVServices.map((s, i) => (
            <div key={s.id} className={i % 2 === 1 ? "lg:[&>div]:flex-row-reverse" : ""}>
              <ServiceCard service={s} />
            </div>
          ))}
        </div>
      </section>

      {/* AI Section */}
      <section id="ai-tools" className="section-padding bg-charcoal">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-reveal>
              <span className="text-label text-gold block mb-4">
                AI-Enhanced Integration
              </span>
              <h2 className="text-display-md text-cream mb-6">
                <CahoniLink>Cahoni AI</CahoniLink>
              </h2>
              <p className="text-warm-gray text-base leading-relaxed mb-4">
                <CahoniLink /> is a proprietary quoting and project management platform
                built by AI Intelligent Services — available as a software development
                service for AV integrators, trades, and technology contractors. Stop
                building quotes in spreadsheets. Generate accurate, professional, branded
                proposals in minutes. Designed by integrators, for integrators.
              </p>
              <a
                href="https://intelligentai.services/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#7FBBCF] hover:text-[#A8D4E2] transition-colors duration-200 text-label text-[0.65rem] mb-8 hover:underline underline-offset-2"
              >
                Visit intelligentai.services ↗
              </a>
              <ul className="flex flex-col gap-4">
                {aiServices.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span className="text-sm text-cream-muted">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square overflow-hidden" data-reveal="right" data-reveal-delay={120}>
              <Image
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80&fit=crop"
                alt="AI smart home control"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-charcoal/20" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-gold">
        <div className="container-luxury text-center" data-reveal>
          <h2 className="font-display text-4xl text-charcoal font-light mb-4">
            Ready to discuss your project?
          </h2>
          <p className="text-charcoal/70 mb-8 text-sm">
            Every engagement begins with a complimentary consultation.
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
