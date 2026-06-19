# Claude Code — AI Intelligent Services Maintenance Guide

This file contains detailed instructions for future Claude Code sessions working on the intelligentai.systems website.

---

## Project Overview

**Company**: AI Intelligent Services  
**Domain**: intelligentai.systems  
**Stack**: Next.js 16 (App Router) + TypeScript + Tailwind CSS v4  
**Hosting**: Vercel  
**Design System**: See `design.md` for complete reference

---

## Working Directory Structure

```
src/
  app/                    # Next.js App Router pages
    page.tsx              # Homepage
    services/page.tsx     # Services page
    projects/page.tsx     # Projects page (client component - uses useState)
    about/page.tsx        # About page
    contact/page.tsx      # Contact form page (client component)
    layout.tsx            # Root layout (fonts, nav, footer)
    globals.css           # ALL custom CSS and design tokens (Tailwind v4)
  components/
    layout/
      Navigation.tsx      # Fixed nav with scroll detection
      Footer.tsx          # Site footer
    home/
      Hero.tsx            # Parallax hero section
      TrustBar.tsx        # Animated brand scrollbar
      ServicesOverview.tsx# 4 tilt cards
      FeaturedProjects.tsx# Scroll-snap gallery
      WhyUs.tsx           # 6-item differentiator grid
      AIToolsSection.tsx  # AI tools feature section
      FinalCTA.tsx        # Bottom CTA with background image
  lib/
    utils.ts              # cn() utility function
    data/
      projects.ts         # All project data (type: Project)
      services.ts         # All service data
```

---

## Critical Technical Notes

### Tailwind v4
This project uses **Tailwind CSS v4** (not v3). Key differences:
- Configuration is in `src/app/globals.css` using `@theme inline { ... }` block — NOT in `tailwind.config.ts`
- Custom colors defined as `--color-gold: #C9A96E` and used as `text-gold`, `bg-gold`, etc.
- No separate `tailwind.config.ts` file is needed for colors

### CSS Custom Classes
All luxury utility classes are defined in `globals.css`:
- `.text-display-xl/lg/md/sm` — display typography
- `.text-label` — small caps label style
- `.container-luxury` — max-width 1320px with fluid padding
- `.section-padding` and `.section-padding-sm` — vertical rhythm
- `.card-gradient`, `.glass`, `.glass-light` — backgrounds
- `.hero-gradient`, `.hero-gradient-bottom` — hero overlays
- `.btn-gold-shimmer` — shimmer animation on CTA buttons
- `.divider-gold` — gradient gold rule
- `.snap-gallery`, `.snap-slide` — scroll snap gallery
- `.image-luxury` — base image treatment with hover scale
- `.animate-fade-up`, `.animate-fade-in`, `.animate-slide-left` — entrance animations
- `.animation-delay-100` through `.animation-delay-800` — stagger delays

### Font Variables
- `--font-cormorant` → Cormorant Garamond (display headings)
- `--font-inter` → Inter (body, labels, UI)
- In JSX, font-display is available via `.font-display` class

### Images
All project/service images use Unsplash URLs. To replace with real images:
1. Upload images to `/public/images/`
2. Update image `src` props in `src/lib/data/projects.ts` and `src/lib/data/services.ts`
3. Remove `images.remotePatterns` from `next.config.ts` if no longer using external images

---

## Common Tasks

### Adding a New Project

1. Open `src/lib/data/projects.ts`
2. Add a new object to the `projects` array following the `Project` type:
```typescript
{
  id: "unique-kebab-id",
  title: "Project Name",
  category: "residential",   // residential | corporate | integrated
  location: "City, ST",
  year: "2024",
  heroImage: "https://images.unsplash.com/photo-XXXX?w=1920&q=85&fit=crop",
  thumbnail: "https://images.unsplash.com/photo-XXXX?w=800&q=80&fit=crop",
  tagline: "Short cinematic description",
  description: "Full paragraph description for the case study modal",
  scope: ["Item 1", "Item 2"],
  systems: ["Crestron NVX"],
  highlights: ["Key achievement 1"],
  stats: [{ label: "Square Feet", value: "8,500" }],
}
```

### Adding a New Service

1. Open `src/lib/data/services.ts`
2. Add to `homeAutomationServices` or `corporateAVServices` array

### Updating Homepage Copy

- **Hero**: `src/components/home/Hero.tsx`
- **Services cards**: `src/components/home/ServicesOverview.tsx` — update `cards` array
- **WhyUs**: `src/components/home/WhyUs.tsx` — update `differentiators` array
- **Final CTA**: `src/components/home/FinalCTA.tsx`

### Adding a New Page

1. Create `src/app/page-name/page.tsx`
2. Export default React component and `metadata` object
3. Add link to Navigation: update `navLinks` in `src/components/layout/Navigation.tsx`
4. Add link to Footer: update `company` array in `src/components/layout/Footer.tsx`

---

## Design System Rules (Mandatory)

- Use ONLY colors from the `@theme` block in `globals.css`
- Gold is for accents, labels, and primary CTAs only
- Headlines ≥ 2xl: always use `font-display` (Cormorant Garamond) with `font-light`
- Every new section starts with `text-label text-gold` label above the headline
- New cards use `card-gradient border border-charcoal-500` as base
- Every CTA button must have `btn-gold-shimmer` class
- New sections use IntersectionObserver for entrance animations

---

## Deployment

### Build Commands
```bash
npm run dev      # Local development
npm run build    # Production build
npm run lint     # ESLint check
```

### Contact Form
Currently logs to console. To connect to email:
1. Create `src/app/api/contact/route.ts`
2. Use Resend or SendGrid to send emails
3. Update the `onSubmit` handler in `src/app/contact/page.tsx` to call the API route
