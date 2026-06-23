import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-charcoal pt-20 px-6">
      <div className="container-luxury text-center">
        <span className="text-label text-gold block mb-6">Error 404</span>
        <h1 className="text-display-lg text-cream mb-6">
          This page has
          <br />
          <em className="text-gold not-italic">gone dark.</em>
        </h1>
        <p className="text-warm-gray text-base max-w-md mx-auto mb-10 leading-relaxed">
          The page you&apos;re looking for can&apos;t be found. Let&apos;s get you
          back to something extraordinary.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="btn-gold-shimmer inline-flex items-center gap-3 px-10 py-4 bg-gold text-charcoal text-label hover:bg-gold-light transition-colors duration-300"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="text-label text-cream-muted hover:text-cream transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
