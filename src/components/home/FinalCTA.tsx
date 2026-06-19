import Link from "next/link";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fit=crop"
          alt="Premium corporate boardroom"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury py-24 w-full">
        <div className="max-w-3xl">
          <span className="text-label text-gold block mb-6">
            Ready to Begin?
          </span>
          <h2 className="text-display-lg text-cream mb-8">
            Every exceptional project
            <br />
            starts with a conversation.
          </h2>
          <p className="text-base text-cream-muted leading-relaxed max-w-xl mb-12 font-light">
            Whether you&apos;re planning a new build, renovating your estate, or
            upgrading your corporate AV infrastructure — our team is ready to
            bring your vision to life with the precision it deserves.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="btn-gold-shimmer inline-flex items-center gap-3 px-10 py-5 bg-gold text-charcoal text-label hover:bg-gold-light transition-all duration-300"
            >
              Request a Consultation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7H12M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 text-label text-cream hover:text-gold transition-colors duration-300 group"
            >
              View Our Work
              <span className="w-6 h-px bg-cream group-hover:bg-gold group-hover:w-10 transition-all duration-300" />
            </Link>
          </div>

          {/* Contact Details */}
          <div className="mt-16 flex flex-wrap items-center gap-8">
            <div>
              <span className="text-label text-warm-gray text-[0.6rem] block mb-1">
                Email
              </span>
              <a
                href="mailto:admin@intelligentai.systems"
                className="text-sm text-cream hover:text-gold transition-colors duration-300"
              >
                admin@intelligentai.systems
              </a>
            </div>
            <div className="w-px h-8 bg-charcoal-500" />
            <div>
              <span className="text-label text-warm-gray text-[0.6rem] block mb-1">
                Response Time
              </span>
              <span className="text-sm text-cream">
                Within 24 business hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
