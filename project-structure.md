# AI Intelligent Services — Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout: fonts (Cormorant + Inter), Navigation, Footer
│   │   ├── page.tsx                # Homepage: Hero + TrustBar + Services + Projects + WhyUs + AI + CTA
│   │   ├── globals.css             # Tailwind v4 @theme tokens + all custom luxury CSS classes
│   │   ├── services/
│   │   │   └── page.tsx            # Services page: Home Automation + Corporate AV + AI section
│   │   ├── projects/
│   │   │   └── page.tsx            # Projects gallery with filter + case study lightbox (client)
│   │   ├── about/
│   │   │   └── page.tsx            # About page: Story + Values + Timeline + Certifications
│   │   └── contact/
│   │       └── page.tsx            # Contact form with react-hook-form + zod (client)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx      # Fixed nav, scroll detection, mobile hamburger menu
│   │   │   └── Footer.tsx          # Footer with links, brand tags, copyright
│   │   │
│   │   └── home/
│   │       ├── Hero.tsx            # Full-viewport parallax hero with stats bar
│   │       ├── TrustBar.tsx        # RAF-animated horizontal brand scroll
│   │       ├── ServicesOverview.tsx# 4 tilt cards with IntersectionObserver entrance
│   │       ├── FeaturedProjects.tsx# Scroll-snap gallery with nav dots
│   │       ├── WhyUs.tsx           # 6-cell grid of differentiators
│   │       ├── AIToolsSection.tsx  # 3-column AI tools feature
│   │       └── FinalCTA.tsx        # Full-bleed background image CTA
│   │
│   └── lib/
│       ├── utils.ts                # cn() = clsx + tailwind-merge
│       └── data/
│           ├── projects.ts         # Project[] type definition + 6 project entries
│           └── services.ts         # Service[] + ServiceCategory[] + 8 service entries
│
├── public/
│   ├── favicon.ico
│   └── (images/ — add real photography here to replace Unsplash)
│
├── next.config.ts                  # Image remotePatterns for Unsplash
├── package.json                    # Next.js 16, Tailwind v4, Framer Motion, RHF, Zod
├── tsconfig.json                   # @/* path alias pointing to src/
├── design.md                       # Complete design system documentation
├── CLAUDE.md                       # This maintenance guide
└── project-structure.md            # This file

## Key Dependencies

| Package              | Version | Purpose                            |
|----------------------|---------|------------------------------------|
| next                 | 16.x    | Framework (App Router)             |
| react                | 19.x    | UI library                         |
| tailwindcss          | v4      | Styling (config in globals.css)    |
| framer-motion        | 12.x    | Premium animations (available)     |
| react-hook-form      | 7.x     | Contact form management            |
| zod                  | 4.x     | Form validation schema             |
| @hookform/resolvers  | 5.x     | RHF + Zod integration              |
| lucide-react         | 1.x     | Icons (Menu, X in navigation)      |
| clsx                 | 2.x     | Conditional class utility          |
| tailwind-merge       | 3.x     | Tailwind class deduplication       |

## Tailwind v4 Color Tokens (defined in globals.css @theme)

--color-charcoal        #0C0C0C  → bg-charcoal, text-charcoal
--color-charcoal-800    #141414
--color-charcoal-700    #1C1C1C
--color-charcoal-600    #2A2A2A
--color-charcoal-500    #3C3C3C
--color-gold            #C9A96E  → bg-gold, text-gold, border-gold
--color-gold-light      #DFC08B  → bg-gold-light (hover state)
--color-gold-muted      #A8854A  → text-gold-muted (logo)
--color-gold-dark       #8B6B3D
--color-cream           #F5F0E8  → text-cream
--color-cream-dark      #EAE3D6
--color-cream-muted     #D4C9B8  → text-cream-muted
--color-warm-gray       #7A7670  → text-warm-gray
--color-warm-gray-light #A09C96
```
