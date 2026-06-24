# AI Intelligent Services — Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root: fonts, Nav, Footer, SmoothScroll, ScrollReveal, JsonLd,
│   │   │                           #   skip link + pre-paint reveal-arming inline script
│   │   ├── page.tsx                # Homepage: Hero → RoomJourney → TrustBar → ServicesOverview →
│   │   │                           #   FeaturedProjects → WhyUs → Testimonials → Assurance →
│   │   │                           #   AIToolsSection → FAQ → FinalCTA
│   │   ├── globals.css             # Tailwind v4 @theme tokens + ALL custom CSS, keyframes, motion
│   │   ├── services/page.tsx       # Home Automation + Corporate AV + Cahoni AI section
│   │   ├── projects/
│   │   │   ├── page.tsx            # Scroll walkthrough + filterable grid + case-study modal (client)
│   │   │   └── layout.tsx          # metadata (page is a client component)
│   │   ├── about/page.tsx          # Story + Cahoni + Values + Timeline + Certifications grid
│   │   ├── contact/
│   │   │   ├── page.tsx            # react-hook-form + zod contact form (client)
│   │   │   └── layout.tsx          # metadata
│   │   ├── invisible-audio/page.tsx# JBL CONCEAL C62/C83/C86/C82W + DA850/DA1650 + rooms walkthrough
│   │   ├── outdoor/page.tsx        # Outdoor Living: audio / lighting / gates / pool walkthrough
│   │   ├── api/contact/route.ts    # LIVE Brevo email + BotID/honeypot/timing/rate-limit/zod
│   │   ├── sitemap.ts              # All routes
│   │   ├── robots.ts               # Crawl rules + sitemap ref
│   │   ├── manifest.ts             # PWA manifest (charcoal theme)
│   │   ├── opengraph-image.tsx     # Branded OG card (next/og ImageResponse)
│   │   └── not-found.tsx           # Branded 404
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx      # Fixed nav (Home/Services/Invisible Audio/Outdoor/Work/About)
│   │   │   └── Footer.tsx          # Links, technology partners, Cahoni callout
│   │   ├── home/
│   │   │   ├── Hero.tsx            # Parallax hero + slow settle + staggered load-in
│   │   │   ├── RoomJourney.tsx     # Continuous scroll-scrub room walkthrough + Living Room lighting demo
│   │   │   ├── TrustBar.tsx        # RAF-animated brand scroll (incl. JBL, Microsoft Teams, Zoom, Extron)
│   │   │   ├── ServicesOverview.tsx# 4 tilt cards (next/image), IntersectionObserver entrance
│   │   │   ├── FeaturedProjects.tsx# Scroll-snap gallery
│   │   │   ├── WhyUs.tsx           # 6-cell differentiator grid
│   │   │   ├── Testimonials.tsx    # 3 client quotes (PLACEHOLDER copy — replace with real)
│   │   │   ├── Assurance.tsx       # 4-up trust band
│   │   │   ├── AIToolsSection.tsx  # Cahoni AI feature
│   │   │   ├── FAQ.tsx             # Accordion + FAQPage JSON-LD (client)
│   │   │   └── FinalCTA.tsx        # Full-bleed CTA
│   │   ├── shared/
│   │   │   ├── SpaceWalkthrough.tsx# Reusable continuous scroll-scrub walkthrough (imperative rAF)
│   │   │   ├── SmoothScroll.tsx    # Global Lenis smooth scrolling
│   │   │   └── ScrollReveal.tsx    # Global [data-reveal] reveal engine (IO + MutationObserver)
│   │   ├── seo/
│   │   │   └── JsonLd.tsx          # LocalBusiness/ElectronicsStore structured data
│   │   └── ui/
│   │       ├── TiltCard.tsx        # Vanilla-tilt 3D card
│   │       └── CahoniLink.tsx      # Steel-blue link to intelligentai.services
│   │
│   └── lib/
│       ├── utils.ts                # cn() = clsx + tailwind-merge
│       └── data/
│           ├── projects.ts         # Project[] (residential + corporate case studies)
│           ├── services.ts         # Service[] + ServiceCategory[] + Cahoni AI
│           ├── jbl.ts              # CONCEAL speakers + DA Series amplifiers
│           └── certifications.ts   # Verified certs grouped by discipline + affiliations
│
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── jbl/  c62.png c83.png c86.png c82w.png da850.jpg   # official JBL imagery
│       └── home-theater.jpg                                   # residential home theater
│
├── next.config.ts                  # Image remotePatterns (Unsplash) + AVIF/WebP + withBotId
├── package.json                    # Next 16, Tailwind v4, Lenis, BotID, RHF, Zod, Framer Motion
├── design.md                       # Complete design + motion system
├── CLAUDE.md                       # Maintenance guide (read first)
└── project-structure.md            # This file
```

## Key Dependencies

| Package              | Version | Purpose                                  |
|----------------------|---------|------------------------------------------|
| next                 | 16.x    | Framework (App Router)                    |
| react                | 19.x    | UI library                                |
| tailwindcss          | v4      | Styling (config in globals.css)           |
| lenis                | 1.x     | Global smooth/inertial scrolling          |
| botid                | 1.x     | Vercel BotID contact-form protection      |
| framer-motion        | 12.x    | Available (most motion is custom CSS/rAF) |
| react-hook-form      | 7.x     | Contact form                              |
| zod                  | 4.x     | Form + API validation                     |
| @hookform/resolvers  | 5.x     | RHF + Zod                                 |
| lucide-react         | latest  | Icons                                     |
| clsx / tailwind-merge| 2.x/3.x | `cn()` utility                            |

Contact email delivery uses the **Brevo** transactional API directly via `fetch` (no SDK); requires `BREVO_API_KEY` env var in Vercel.

## Tailwind v4 Color Tokens (in globals.css @theme)

```
--color-charcoal        #0C0C0C   bg-charcoal / text-charcoal
--color-charcoal-800    #141414
--color-charcoal-700    #1C1C1C
--color-charcoal-600    #2A2A2A
--color-charcoal-500    #3C3C3C   borders / grid lines
--color-gold            #C9A96E   accents, labels, CTAs
--color-gold-light      #DFC08B   hover
--color-gold-muted      #A8854A
--color-gold-dark       #8B6B3D
--color-cream           #F5F0E8   primary text
--color-cream-dark      #EAE3D6
--color-cream-muted     #D4C9B8
--color-warm-gray       #948D85   body/meta (lightened from #7A7670 for WCAG AA)
--color-warm-gray-light #B0AAA2
```
