# Claude Code — AI Intelligent Services Maintenance Guide

Detailed instructions for future Claude Code sessions working on the intelligentai.systems website. **Read this and `design.md` before making changes.**

---

## Project Overview

**Company**: AI Intelligent Services (also an **Authorized JBL Dealer**)
**Domain**: intelligentai.systems
**Contact email**: `admin@intelligentai.services` — note the `.services` TLD, NOT `.systems`. Use `.services` everywhere a contact email is shown.
**Sister product**: Cahoni AI (quoting platform) at https://intelligentai.services — always linked via `CahoniLink` component (steel-blue #7FBBCF).
**Stack**: Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Lenis smooth scroll
**Hosting**: Vercel (auto-deploys on push to `main`; repo `CrestronDude/intelligentai-systems`)
**Design System**: See `design.md` for the complete reference

---

## Working Directory Structure

```
src/
  app/
    layout.tsx              # Root layout — fonts, Nav, Footer, SmoothScroll, ScrollReveal, JsonLd,
                            #   skip link, and the pre-paint inline script that arms scroll-reveal
    page.tsx                # Homepage (composes the home/* components)
    globals.css             # ALL custom CSS, design tokens (@theme), and every keyframe/animation
    services/page.tsx       # Services page
    projects/page.tsx       # Projects gallery + case-study modal (client component)
    projects/layout.tsx     # metadata for /projects (page is a client component)
    about/page.tsx          # About — story, Cahoni, values, timeline, certifications
    contact/page.tsx        # Contact form (client component)
    contact/layout.tsx      # metadata for /contact
    invisible-audio/page.tsx# JBL CONCEAL (C62/C83/C86/C82W) + DA850/DA1650 amps + rooms walkthrough
    outdoor/page.tsx        # Outdoor Living — landscape audio, lighting, gates, pool (walkthrough)
    simulator/page.tsx      # Interactive Smart Home Simulator (touch panel + remote + live env)
    api/contact/route.ts    # LIVE Brevo email + BotID/honeypot/timing/rate-limit/zod protection
    sitemap.ts robots.ts manifest.ts not-found.tsx   # SEO / PWA / 404
                            # (OG share image is the Unsplash URL in layout metadata — no
                            #  opengraph-image route; it was removed on request)
  components/
    layout/ Navigation.tsx Footer.tsx
    home/   Hero.tsx RoomJourney.tsx TrustBar.tsx ServicesOverview.tsx
            FeaturedProjects.tsx WhyUs.tsx Testimonials.tsx Assurance.tsx
            AIToolsSection.tsx FAQ.tsx FinalCTA.tsx
    shared/ SpaceWalkthrough.tsx  # reusable continuous scroll-scrub "walk through spaces"
            SmoothScroll.tsx      # global Lenis smooth scrolling
            ScrollReveal.tsx      # global [data-reveal] on-scroll reveal engine
    simulator/ Simulator.tsx      # smart-home sim: state + layout + interface toggle
               RoomStage.tsx      # reactive environment (lighting, blinds, video, audio viz)
               TouchPanel.tsx RemoteControl.tsx   # the two control interfaces
               useHomeAudio.ts    # real MP3 playback + Web Audio analyser
               simulatorData.ts   # rooms/scenes/sources + per-room screen/window geometry
    seo/    JsonLd.tsx            # LocalBusiness/ElectronicsStore structured data
    ui/     TiltCard.tsx CahoniLink.tsx
  lib/
    utils.ts                # cn()
    data/ projects.ts services.ts jbl.ts certifications.ts
public/
  images/ jbl/*.png  home-theater.jpg  digital-signage.jpg  corporate-av.jpg   # local imagery
  media/  video/*.mp4  audio/*.mp3      # self-hosted clips + tracks for the simulator
```

---

## Motion & UI System — NEVER FORGET

The site's signature feel is **cinematic, scroll-driven motion**. Preserve it. Steven explicitly loves this and rejected both "discrete index-flip" and "stepped/auto-advance" walkthrough variants — the approved approach is **continuous scroll-scrub**.

1. **Global smooth scrolling** — `SmoothScroll.tsx` runs Lenis (mounted in `layout.tsx`). Required CSS lives in `globals.css` (`html.lenis…`). Gives the buttery momentum the rest of the motion rides on. Disabled under `prefers-reduced-motion`.

2. **Scroll-scrub walkthroughs** — `SpaceWalkthrough.tsx` (used on `/invisible-audio`, `/outdoor`, `/projects`) and `RoomJourney.tsx` (homepage) present full-bleed spaces that **cross-dissolve + scale + parallax continuously with scroll** (no threshold flips). They run a per-frame imperative rAF loop that eases a continuous progress value `t ∈ [0, N-1]` (`EASE ≈ 0.085`) and set each layer's opacity/transform via refs (no React re-render per frame). Each space gets `VH_PER_SPACE ≈ 115vh` of scroll travel. The active image keeps a gentle ken-burns drift (`.room-image-active`).

3. **Global scroll-reveal** — `ScrollReveal.tsx` reveals any element marked `data-reveal` as it enters the viewport (fade + rise/slide/scale, luxury easing, optional `data-reveal-delay="120"` ms, direction via `data-reveal="up|left|right|scale"`). CSS in `globals.css` under `.reveal-on [data-reveal]`. **Progressive enhancement**: the hidden state is gated by the `reveal-on` class, added before first paint by an inline script in `layout.tsx` so there's no load flash and content stays visible without JS. Use `data-reveal` on every new section/card.

4. **Hero load-in** — every page hero image uses `.hero-img-settle` (slow 3.4s zoom-out settle). The homepage `Hero` also staggers its text in via `animate-fade-up` with inline `animationDuration: 1.3s` and increasing delays. It's pure CSS, so it runs on mobile too.

5. **Living Room lighting demo** (RoomJourney slide 01) — `.scene-cycle` overlay tints the room through Daylight→Evening→Focus→Cinema→Entertain on a 22s loop; a synced caption (`.scene-name-*`) and the floor-plan glow dot (`.scene-dot`) change with it. All three share the same 22s timeline from load and are opacity-gated to the active slide so they never drift.

6. **`prefers-reduced-motion`** is honored globally (see the media query in `globals.css`). Any new motion must degrade gracefully.

---

## Smart Home Simulator (`/simulator`)

A fully client-side interactive demo (`src/components/simulator/*`). One `useReducer` holds per-room state; two interfaces (`TouchPanel`, `RemoteControl`) mutate it; `RoomStage` visualizes it live.

- **Photoreal mapping** — each room's controllable elements sit at their ACTUAL location in the room photo, driven by per-room geometry rects in `simulatorData.ts` (`ROOMS[].screen` and `ROOMS[].window`, in %). The Home Theater video plays on the real screen; living/bedroom powered shades cover the real windows. **To fix alignment, adjust those % rects** — nothing else.
- **Real media, self-hosted** in `public/media/` — video clips (Blender open movies, CC) and audio tracks (SoundHelix demo). ⚠️ Confirm/replace licensing before heavy production use.
- **Audio** — `useHomeAudio.ts` plays the MP3 via an `Audio()` element routed through a Web Audio `AnalyserNode` (created inside a user gesture), so the equalizer reacts to the real track. Returns a memoized engine (stable identity — don't break that).
- **Lighting** dims the photo's real fixtures via a CSS `brightness()` filter + warm ambiance glow + color wash; shades closing darkens further.
- **Mobile**: the fixed `80vh` side-by-side frame and inner panel scrolling are `lg:`-only. On phones the stage is `~44vh` and the panel/remote expand to full natural height (page scrolls).

---

## Critical Technical Notes

### Tailwind v4
- Config lives in `src/app/globals.css` via `@theme inline { ... }` — there is no `tailwind.config.ts` for colors.
- Colors are used as `text-gold`, `bg-charcoal-700`, `border-charcoal-500`, etc.

### CSS Custom Classes (all in `globals.css`)
Typography: `.text-display-xl/lg/md/sm`, `.text-label`, `.font-display`
Layout: `.container-luxury`, `.section-padding`, `.section-padding-sm`
Surfaces: `.card-gradient`, `.glass`, `.glass-light`, `.hero-gradient`, `.hero-gradient-bottom`, `.divider-gold`
Buttons/links: `.btn-gold-shimmer`, `.gold-line`
Images/motion: `.image-luxury`, `.hero-img-settle`, `.room-image-active`
Reveal: `.reveal-on [data-reveal]` (+ `="left"|"right"|"scale"`, `.is-visible`)
Lighting demo: `.scene-cycle`, `.scene-name(-day/-evening/-focus/-cinema/-party)`, `.scene-dot`
Legacy entrance: `.animate-fade-up/-in/-slide-left/-scale-up`, `.animation-delay-100…800`
Accessibility: `.skip-link`, global `:focus-visible`, `prefers-reduced-motion` block

### Fonts
`--font-cormorant` (Cormorant Garamond, display) · `--font-inter` (Inter, body/UI). Use `.font-display` for serif.

### Images
- Real product/room imagery is **hosted locally** in `public/images/` (JBL CONCEAL/DA + `home-theater.jpg`). Prefer local hosting for brand assets.
- Remaining decorative imagery uses Unsplash (`images.unsplash.com` / `plus.unsplash.com`, allow-listed in `next.config.ts`, which also enables AVIF/WebP).
- **Always verify an Unsplash photo ID actually depicts the right subject before using it** (download + view). Many IDs are mismatched.
- Heroes: `?w=1920&q=85&fit=crop`; cards: `?w=600-800&q=80&fit=crop`.

---

## Common Tasks

### Adding a New Page
1. `src/app/<name>/page.tsx` — default component + `metadata` export (if it must be a client component, put `metadata` in a sibling `layout.tsx`).
2. Add to `navLinks` in `Navigation.tsx` and the footer `services`/`company` arrays in `Footer.tsx`.
3. Add the route to `src/app/sitemap.ts`.
4. Give the hero image `hero-img-settle` and add `data-reveal` to content sections so it matches the site's motion.

### Adding a Scroll-Walkthrough section
Import `SpaceWalkthrough` and pass `spaces: Space[]` (`{ number, label, title, titleAccent?, body, features?, tags?, image, imageAlt }`). See `/outdoor` for the canonical example.

### Adding a Project / Service / Certification
- Projects: `src/lib/data/projects.ts` (`Project` type). Services: `src/lib/data/services.ts`.
- JBL products: `src/lib/data/jbl.ts`. Certifications: `src/lib/data/certifications.ts` (grouped by discipline; rendered on About).

---

## Design System Rules (Mandatory)
- Use ONLY colors from the `@theme` block. Gold is for accents/labels/primary CTAs only.
- Headlines ≥ 2xl: `font-display` (Cormorant) + `font-light`.
- Every section starts with a `text-label text-gold` eyebrow above the headline.
- New cards: `card-gradient border border-charcoal-500`.
- Every CTA button: `btn-gold-shimmer`.
- Every new section/card gets `data-reveal` (with stagger on grids) so it participates in the motion system.
- Honor `prefers-reduced-motion` for anything animated.

---

## Deployment

```bash
npm run dev      # local
npm run build    # production build (run before every commit)
npm run lint     # ESLint
```

- Push to `main` → Vercel auto-deploys to production (intelligentai.systems).
- Verify deploys via the Vercel MCP tools (project `prj_p2Y8tS2H6PWYPTo0Dy3DsTLkKh3e`, team `team_3Ovm8OjDvdW6pyU22nimzHJI`).

### Contact form (LIVE)
- `src/app/api/contact/route.ts` sends via **Brevo** transactional API. Requires **`BREVO_API_KEY`** in Vercel (production). From/To: `admin@intelligentai.services`, `replyTo` = the inquirer.
- Protection: Vercel **BotID** (`checkBotId`), honeypot `company` field, <3s timing trap, per-IP rate limit (3 / 10 min), and full zod validation. Client shows a graceful fallback (direct email + phone) on 403/429.
