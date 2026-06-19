"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  projectType: z.enum(["residential", "corporate", "both", "other"]),
  budget: z.enum(["under-50k", "50k-150k", "150k-500k", "500k-plus", "prefer-not-to-say"]),
  message: z.string().min(20, "Please describe your project in at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const projectTypes = [
  { value: "residential", label: "Residential / Smart Home" },
  { value: "corporate", label: "Corporate / Commercial AV" },
  { value: "both", label: "Mixed-Use / Both" },
  { value: "other", label: "Other" },
] as const;

const budgets = [
  { value: "under-50k", label: "Under $50,000" },
  { value: "50k-150k", label: "$50,000 – $150,000" },
  { value: "150k-500k", label: "$150,000 – $500,000" },
  { value: "500k-plus", label: "$500,000+" },
  { value: "prefer-not-to-say", label: "Prefer not to say" },
] as const;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      projectType: "residential",
      budget: "prefer-not-to-say",
    },
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-charcoal pt-20">
        <div className="container-luxury text-center">
          <div className="w-16 h-16 border border-gold mx-auto mb-8 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12l4 4L19 8"
                stroke="#C9A96E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="font-display text-4xl text-cream font-light mb-4">
            Thank you for reaching out.
          </h2>
          <p className="text-warm-gray text-base mb-8 max-w-md mx-auto">
            We&apos;ve received your inquiry and will be in touch within one
            business day to schedule your complimentary consultation.
          </p>
          <a
            href="/"
            className="text-label text-gold hover:text-gold-light transition-colors duration-300"
          >
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 bg-charcoal">
        <div className="container-luxury">
          <span className="text-label text-gold block mb-4">Contact</span>
          <h1 className="text-display-lg text-cream mb-6">
            Let&apos;s build something
            <br />
            <em className="text-gold not-italic">extraordinary</em>
          </h1>
          <p className="text-base text-warm-gray max-w-lg leading-relaxed">
            Every project begins with a complimentary consultation. Tell us
            about your vision and we&apos;ll show you what&apos;s possible.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-label text-warm-gray text-[0.65rem] block mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register("name")}
                      className={cn(
                        "w-full bg-charcoal-700 border text-cream text-sm px-5 py-4 outline-none transition-colors duration-300 placeholder:text-charcoal-500",
                        errors.name
                          ? "border-red-500/50"
                          : "border-charcoal-500 focus:border-gold"
                      )}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-[0.65rem] text-red-400 mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-label text-warm-gray text-[0.65rem] block mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className={cn(
                        "w-full bg-charcoal-700 border text-cream text-sm px-5 py-4 outline-none transition-colors duration-300 placeholder:text-charcoal-500",
                        errors.email
                          ? "border-red-500/50"
                          : "border-charcoal-500 focus:border-gold"
                      )}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-[0.65rem] text-red-400 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-label text-warm-gray text-[0.65rem] block mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full bg-charcoal-700 border border-charcoal-500 focus:border-gold text-cream text-sm px-5 py-4 outline-none transition-colors duration-300 placeholder:text-charcoal-500"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="text-label text-warm-gray text-[0.65rem] block mb-3">
                    Project Type *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {projectTypes.map((type) => (
                      <label
                        key={type.value}
                        className="flex items-center gap-3 border border-charcoal-500 px-4 py-3 cursor-pointer hover:border-gold transition-colors duration-300 group has-[:checked]:border-gold"
                      >
                        <input
                          {...register("projectType")}
                          type="radio"
                          value={type.value}
                          className="hidden"
                        />
                        <span className="w-3 h-3 border border-charcoal-500 group-has-[:checked]:border-gold group-has-[:checked]:bg-gold flex-shrink-0 transition-all duration-300" />
                        <span className="text-sm text-cream-muted group-has-[:checked]:text-cream transition-colors duration-300">
                          {type.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="text-label text-warm-gray text-[0.65rem] block mb-2">
                    Approximate Budget
                  </label>
                  <select
                    {...register("budget")}
                    className="w-full bg-charcoal-700 border border-charcoal-500 focus:border-gold text-cream text-sm px-5 py-4 outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    {budgets.map((b) => (
                      <option key={b.value} value={b.value}>
                        {b.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-label text-warm-gray text-[0.65rem] block mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={6}
                    className={cn(
                      "w-full bg-charcoal-700 border text-cream text-sm px-5 py-4 outline-none transition-colors duration-300 placeholder:text-charcoal-500 resize-none",
                      errors.message
                        ? "border-red-500/50"
                        : "border-charcoal-500 focus:border-gold"
                    )}
                    placeholder="Describe your project, property, key systems, timeline, and any specific requirements..."
                  />
                  {errors.message && (
                    <p className="text-[0.65rem] text-red-400 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold-shimmer inline-flex items-center gap-3 px-10 py-4 bg-gold text-charcoal text-label hover:bg-gold-light transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border border-charcoal/40 border-t-charcoal rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path
                            d="M2 7H12M8 3l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-[0.65rem] text-warm-gray mt-3">
                    We respond within one business day. All inquiries are strictly confidential.
                  </p>
                </div>
              </form>
            </div>

            {/* Info Panel */}
            <div className="lg:col-span-2">
              <div className="sticky top-32">
                {/* Contact Details */}
                <div className="mb-10">
                  <h3 className="font-display text-xl text-cream font-light mb-6">
                    Get in Touch
                  </h3>
                  <div className="flex flex-col gap-6">
                    <div>
                      <span className="text-label text-gold text-[0.6rem] block mb-1">
                        Email
                      </span>
                      <a
                        href="mailto:info@intelligentai.systems"
                        className="text-sm text-cream-muted hover:text-cream transition-colors duration-300"
                      >
                        info@intelligentai.systems
                      </a>
                    </div>
                    <div>
                      <span className="text-label text-gold text-[0.6rem] block mb-1">
                        Response Time
                      </span>
                      <span className="text-sm text-cream-muted">
                        Within 1 business day
                      </span>
                    </div>
                    <div>
                      <span className="text-label text-gold text-[0.6rem] block mb-1">
                        Service Area
                      </span>
                      <span className="text-sm text-cream-muted">
                        Nationwide (US) · Select International
                      </span>
                    </div>
                  </div>
                </div>

                <div className="divider-gold mb-10 opacity-30" />

                {/* What to Expect */}
                <div>
                  <h3 className="font-display text-xl text-cream font-light mb-6">
                    What to Expect
                  </h3>
                  <div className="flex flex-col gap-6">
                    {[
                      {
                        step: "01",
                        title: "Consultation",
                        desc: "A 30-minute call to understand your vision, property, and requirements.",
                      },
                      {
                        step: "02",
                        title: "Proposal",
                        desc: "A detailed, AI-assisted scope of work with transparent pricing.",
                      },
                      {
                        step: "03",
                        title: "Design & Programming",
                        desc: "Custom-built automation logic designed specifically for your space.",
                      },
                      {
                        step: "04",
                        title: "Installation & Commissioning",
                        desc: "White-glove installation followed by thorough system training.",
                      },
                    ].map((s) => (
                      <div key={s.step} className="flex items-start gap-4">
                        <span className="font-display text-2xl text-charcoal-500 font-light flex-shrink-0">
                          {s.step}
                        </span>
                        <div>
                          <span className="text-sm text-cream block mb-0.5">
                            {s.title}
                          </span>
                          <span className="text-xs text-warm-gray">{s.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
