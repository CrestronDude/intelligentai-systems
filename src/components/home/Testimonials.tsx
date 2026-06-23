// NOTE FOR STEVEN: The quotes below are tasteful placeholders written in an
// anonymized style (by neighborhood / role) so nothing is falsely attributed to
// a named person or company. Replace the `quote` / `attribution` text with real,
// approved client testimonials when you have them. Keeping attributions
// anonymized until then avoids fabricating named endorsements.

const testimonials = [
  {
    quote:
      "Every cable run, every line of code — exactly as promised, delivered on schedule and on budget. The system simply works, and it has never once made us think about it.",
    attribution: "Private Residence",
    detail: "Bridal Path, Toronto",
  },
  {
    quote:
      "They understood that discretion mattered as much as performance. The technology disappears into the architecture — you only notice how effortless everything has become.",
    attribution: "Private Residence",
    detail: "Rosedale, Toronto",
  },
  {
    quote:
      "Our boardrooms start in seconds, every time, across every floor. The most reliable AV partner we have worked with — and the support response is genuinely immediate.",
    attribution: "Director of Facilities",
    detail: "Corporate Headquarters, GTA",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-6" aria-label="Five out of five stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C9A96E" aria-hidden="true">
          <path d="M12 2l2.9 6.2 6.8.7-5 4.6 1.4 6.7L12 17.8 5.9 20.9l1.4-6.7-5-4.6 6.8-.7L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-charcoal-800" aria-labelledby="testimonials-heading">
      <div className="container-luxury">
        <div className="mb-16 max-w-xl">
          <span className="text-label text-gold block mb-4">Client Voices</span>
          <h2 id="testimonials-heading" className="text-display-md text-cream">
            Trusted in the homes and boardrooms that demand the most.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="card-gradient border border-charcoal-500 p-8 md:p-10 flex flex-col"
            >
              <Stars />
              <blockquote className="flex-1">
                <p className="font-display text-xl text-cream-muted font-light leading-relaxed">
                  “{t.quote}”
                </p>
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-charcoal-600">
                <span className="block text-sm text-cream">{t.attribution}</span>
                <span className="block text-[0.7rem] text-warm-gray mt-1 tracking-wide">
                  {t.detail}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
