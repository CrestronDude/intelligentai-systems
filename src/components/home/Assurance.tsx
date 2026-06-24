// Trust/assurance band. Each point reflects claims already made elsewhere on the
// site (certified programming, 15+ years, transparent pricing, 1-business-day
// response, remote monitoring/SLA support). If you want to advertise a specific
// warranty length or uptime SLA, tell me the exact terms and I'll add them here.

const assurances = [
  {
    title: "Manufacturer-Certified",
    body: "Certified Crestron, RTI, Q-SYS & AMX programming — not resold, but engineered in-house.",
  },
  {
    title: "15+ Years · 500+ Projects",
    body: "A track record across luxury residences and enterprise environments nationwide.",
  },
  {
    title: "Transparent Pricing",
    body: "Detailed, AI-assisted scopes of work with clear, itemized pricing — no surprises.",
  },
  {
    title: "Proactive Support",
    body: "Remote monitoring and SLA-backed response keep your systems flawless long after install.",
  },
];

export default function Assurance() {
  return (
    <section className="section-padding-sm bg-charcoal border-y border-charcoal-500" aria-labelledby="assurance-heading">
      <div className="container-luxury">
        <h2 id="assurance-heading" className="sr-only">
          Why our clients trust us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-500">
          {assurances.map((a, i) => (
            <div key={a.title} data-reveal data-reveal-delay={i * 110} className="bg-charcoal px-7 py-9">
              <span className="block w-8 h-px bg-gold mb-5" />
              <h3 className="font-display text-xl text-cream font-light mb-3 leading-snug">
                {a.title}
              </h3>
              <p className="text-sm text-warm-gray leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
