# AI Intelligent Services — Design System

> This document is the authoritative source for all visual and interaction decisions on the intelligentai.systems website. All future changes should be consistent with this system.

---

## Color Palette

### Primary Brand Colors

| Name            | Hex       | Usage                                    |
|-----------------|-----------|------------------------------------------|
| Charcoal        | `#0C0C0C` | Primary background, deepest dark         |
| Charcoal 800    | `#141414` | Secondary background, cards              |
| Charcoal 700    | `#1C1C1C` | Tertiary background, hover states        |
| Charcoal 600    | `#2A2A2A` | Grid lines, subtle dividers              |
| Charcoal 500    | `#3C3C3C` | Borders, muted dividers                  |
| Gold            | `#C9A96E` | Primary accent, highlights, CTAs         |
| Gold Light      | `#DFC08B` | Hover state for gold elements            |
| Gold Muted      | `#A8854A` | Secondary accent, logo accent            |
| Gold Dark       | `#8B6B3D` | Deeper gold, gradient ends               |
| Cream           | `#F5F0E8` | Primary text on dark backgrounds         |
| Cream Dark      | `#EAE3D6` | Secondary text                           |
| Cream Muted     | `#D4C9B8` | Tertiary text, placeholders              |
| Warm Gray       | `#948D85` | Body text, meta info (lightened from #7A7670 for WCAG AA) |
| Warm Gray Light | `#B0AAA2` | Disabled states, secondary meta          |

### Color Rules
- **Never use pure white (#FFF) or pure black (#000)** — use Cream and Charcoal instead.
- Gold is sacred — use it sparingly to maintain luxury feel.
- Backgrounds should always be warm-tinted dark, never cool gray.
- Text hierarchy: Cream → Cream Muted → Warm Gray (lightest body).

---

## Typography

### Type Scale

| Role          | Font                  | Weight     | Size Range         | Notes                         |
|---------------|-----------------------|------------|--------------------|-------------------------------|
| Display XL    | Cormorant Garamond    | 300 Light  | 3rem – 7rem (clamp)| Hero headlines                |
| Display LG    | Cormorant Garamond    | 300 Light  | 2.5rem – 5rem      | Section headlines             |
| Display MD    | Cormorant Garamond    | 300 Light  | 2rem – 3.5rem      | Sub-section headlines         |
| Display SM    | Cormorant Garamond    | 400        | 1.5rem – 2.5rem    | Card titles, nav mobile       |
| Label         | Inter                 | 600        | 0.6875rem          | 0.18em letter-spacing, ALLCAPS |
| Body LG       | Inter                 | 400        | 1.125rem           | Hero subtext, intro copy      |
| Body MD       | Inter                 | 400        | 1rem               | General body copy             |
| Body SM       | Inter                 | 400        | 0.875rem           | Card descriptions, meta       |
| Caption       | Inter                 | 400        | 0.75rem            | Labels, tags, specs           |

### Typography Rules
- Display fonts are **always** Cormorant Garamond — never set display text in Inter.
- Use `font-light` (300) for display unless emphasis requires `font-normal` (400).
- Italic in display text is intentional and elegant — use `not-italic` class to cancel only when needed, but *lean into it* for hero headlines (e.g., `<em className="text-gold not-italic">`).
- Letter-spacing: Labels use `0.18em`, nothing else gets extra tracking except explicit micro-labels.
- Line height: Display uses 1.05–1.15, body uses 1.6–1.75 for readability.

---

## Spacing System

We use Tailwind's base 4px grid plus custom tokens for section-level spacing.

### Section Padding
- **`section-padding`**: `clamp(5rem, 10vw, 9rem)` top and bottom — full sections
- **`section-padding-sm`**: `clamp(3rem, 6vw, 5rem)` — compact sections like CTAs
- **`container-luxury`**: max-width 1320px, horizontal padding `clamp(1.25rem, 5vw, 5rem)`

### Component Spacing
| Context              | Spacing       |
|----------------------|---------------|
| Section headline → body | mb-6 – mb-8  |
| Card padding          | p-8 or p-10  |
| Grid gap (cards)      | gap-4 – gap-6|
| Element within card   | mb-4 – mb-6  |
| Label above headline  | mb-4          |
| Gold accent line width| 0.5rem–0.75rem height=1px |

### Negative Space Philosophy
- Sections should breathe. Never crowd multiple large elements.
- Cards get generous internal padding (p-8 minimum).
- Trust the whitespace — it communicates luxury.

---

## Component Library

### Buttons

**Primary (Gold):**
```html
<button class="btn-gold-shimmer px-8 py-4 bg-gold text-charcoal text-label hover:bg-gold-light transition-colors duration-300">
  Button Text
</button>
```

**Secondary (Ghost):**
```html
<button class="px-8 py-4 border border-cream/30 text-cream text-label hover:border-gold hover:text-gold transition-all duration-300">
  Button Text
</button>
```

**Text Link:**
```html
<a class="inline-flex items-center gap-3 text-label text-cream-muted hover:text-gold transition-colors duration-300 group">
  View All
  <span class="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
</a>
```

### Cards

All service/project cards use:
- `card-gradient` background class
- `border border-charcoal-500 hover:border-gold/30` for border
- `transition-all duration-500` for all transitions
- Tilt effect via JavaScript (see `TiltCard` component)

### Form Inputs
- Background: `bg-charcoal-700`
- Border: `border border-charcoal-500 focus:border-gold`
- Text: `text-cream text-sm`
- No border-radius — clean rectangular forms only
- Padding: `px-5 py-4`

### Badges / Tags
```html
<span class="text-label text-gold border border-gold/30 px-3 py-1.5 text-[0.65rem]">
  Tag Text
</span>
```

---

## Signature Motion System (the soul of the site — preserve it)

The site reads as cinematic and "alive." Approved approach is **continuous, scroll-linked motion**. Rejected (do not reintroduce): discrete index-flip transitions, and stepped/auto-advance walkthroughs. Everything below honors `prefers-reduced-motion`.

### 1. Global smooth scrolling (Lenis)
`components/shared/SmoothScroll.tsx` runs Lenis (eased momentum, `duration ≈ 1.15`), mounted in the root layout. All other motion rides on this. Required CSS: the `html.lenis…` rules in `globals.css`. Native touch momentum is kept on mobile.

### 2. Scroll-scrub walkthroughs
`SpaceWalkthrough.tsx` (reusable; `/invisible-audio`, `/outdoor`, `/projects`) and `RoomJourney.tsx` (homepage) pin a full-screen viewport and **cross-dissolve + scale + parallax between spaces continuously with scroll** — no hard flips. Implementation: a per-frame imperative rAF loop eases a continuous progress value `t ∈ [0, N-1]` (`EASE ≈ 0.085`) and writes each layer's opacity/transform via refs (no React re-render per frame). `VH_PER_SPACE ≈ 115vh` of scroll travel per space. The active image keeps a slow ken-burns drift (`.room-image-active`).

### 3. Global scroll-reveal
`ScrollReveal.tsx` reveals any `data-reveal` element as it enters view (IntersectionObserver + MutationObserver for route changes). Options: `data-reveal="up|left|right|scale"`, `data-reveal-delay="120"` (ms stagger). CSS under `.reveal-on [data-reveal]`. **Progressive enhancement**: hidden state is gated by the `reveal-on` class added before first paint by an inline script in `layout.tsx` (no load flash; content visible without JS). Put `data-reveal` on every new section/card.

### 4. Hero load-in
Every page hero image uses `.hero-img-settle` (slow 3.4s scale 1.16→1.0 settle). The homepage `Hero` additionally staggers its text via `animate-fade-up` with inline `animationDuration: 1.3s` and increasing delays (0.2s → 1.7s). Pure CSS → runs on mobile.

### 5. Living Room lighting demo (RoomJourney slide 01)
Demonstrates one-touch scene control: `.scene-cycle` (soft-light overlay) tints the room through **Daylight → Evening → Focus → Cinema → Entertain** on a 22s loop; a synced caption (`.scene-name-*`) and the floor-plan glow dot (`.scene-dot`) change with it. All three share the same 22s timeline from load and are opacity-gated to the active slide so they stay in lockstep.

### 6. Interactive Smart Home Simulator (`/simulator`)
A working, client-side demo of a system we'd install: a touch-panel and a remote emulator control a reactive virtual home (lighting, motorized shades, real audio + video playback) where every element is mapped to its real location in the room photo. See `CLAUDE.md` → "Smart Home Simulator" for the architecture; geometry lives in `src/components/simulator/simulatorData.ts`.

## Animation & Interaction Guidelines

### Entrance Animations
- **Preferred**: `data-reveal` (global engine) for sections/cards.
- Legacy classes still available: `animate-fade-up` / `-in` / `-slide-left` / `-scale-up`, with `.animation-delay-100`–`800`.

### Scroll Interactions
- **Parallax Hero**: background scrolls at ~30% of scroll speed (the wrapper's `translateY`; the image itself runs the settle + ken-burns).
- **Walkthroughs**: continuous scroll-scrub (see Signature Motion System).
- **Trust Bar**: RAF horizontal marquee at ~0.3px/frame.

### Tilt Effect (Service Cards)
```javascript
// Mouse enter: transition 0.1s ease (follows mouse fast)
// Mouse leave: transition 0.6s cubic-bezier(0.16,1,0.3,1) (returns slowly)
// Max rotation: 12 degrees on both axes
// Perspective: 1000px
```

### Page Transitions
- No full-page transitions (Next.js App Router doesn't need them)
- Individual section reveals via IntersectionObserver

### Hover States
| Element        | Hover Effect                                      |
|----------------|---------------------------------------------------|
| Nav links      | Color → Gold + underline slides in from left      |
| Cards          | Border brightens to gold/30                       |
| Images         | Scale 1.03 over 800ms                             |
| Text links     | Color to Gold, trailing line extends              |
| CTA buttons    | Background lightens (gold → gold-light)           |
| Gold accent lines | Width increases (0.5rem → 0.75rem+)           |

### Transition Timing
- **Fast** (micro): 0.3s cubic-bezier(0.16, 1, 0.3, 1)
- **Smooth** (cards, images): 0.6s – 0.8s cubic-bezier(0.16, 1, 0.3, 1)
- **Page elements**: 0.5s ease

---

## Image Treatment Rules

### Image Style
- **Always** use `object-fit: cover` and `object-position: center`
- **Never** use `object-contain` for hero or card images (pillars/letterboxing looks cheap)
- All photography must be high-resolution (minimum 800px wide for cards, 1920px for heroes)
- All Unsplash URLs should include `?w=1920&q=85&fit=crop` for heroes, `?w=800&q=80&fit=crop` for cards

### Subject Matter
- **Residential**: Luxury modern interiors (living rooms, kitchens, home theaters, exteriors)
- **Corporate**: Premium boardrooms, modern office spaces, event venues
- **Technology**: Should be subtle, integrated, invisible — not "sci-fi" or consumer gadget imagery
- **Tone**: Moody, architectural, high-contrast, cinematic — never stock-photo generic

### Overlays
- Hero sections: `hero-gradient` (left-to-right dark) + `hero-gradient-bottom` (bottom fade)
- Cards: `bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent`
- Static sections: `bg-charcoal/20` to add warmth

### Next.js Image Config
```typescript
// next.config.ts (wrapped in withBotId)
images: {
  formats: ["image/avif", "image/webp"],
  remotePatterns: [
    { protocol: "https", hostname: "images.unsplash.com" },
    { protocol: "https", hostname: "plus.unsplash.com" },
  ],
}
```

### Local vs. remote imagery
- **Brand/product/room assets are hosted locally** in `public/images/` (JBL CONCEAL/DA, `home-theater.jpg`) — more reliable than hotlinking and no remotePattern needed.
- Decorative imagery uses Unsplash. **Always download + visually verify a photo ID depicts the correct subject before using it** — many IDs are mismatched.

---

## Layout Rules

### Navigation
- Fixed, 80px height (`h-20`)
- Transparent on homepage hero, dark glass on scroll or other pages
- Logo: Left; Links: Center-Right; CTA Button: Right
- Mobile: Hamburger → full-screen dark overlay menu

### Footer
- Three-column layout: Brand + Services + Company + Technology Partners
- Dark background: `bg-charcoal-800`
- Gold divider line between footer sections and copyright bar

### Section Composition
```
[Label — small gold uppercase]
[H2 — display serif, light]
[Body — warm gray, max-width ~40ch]
[Component/Grid]
[Optional: CTA link — bottom right]
```

### Grid Patterns
- **Cards**: 1 col → 2 col → 4 col (sm/lg breakpoints)
- **Content + Image**: `grid-cols-1 lg:grid-cols-2`
- **3-col features**: `grid-cols-1 md:grid-cols-3`
- **Stats**: `grid-cols-2 md:grid-cols-4`

---

## SEO Structure

- Every page exports `metadata` (`title`, `description`, `openGraph`, `twitter`). Client-component pages (`/projects`, `/contact`) carry it via a sibling `layout.tsx`.
- Title template `"Page Name | AI Intelligent Services"`; `metadataBase` = `https://intelligentai.systems`.
- File-based SEO: `sitemap.ts`, `robots.ts`, `manifest.ts` (PWA), `not-found.tsx` (branded 404). The shared-link (Open Graph) image is the Unsplash URL set in `layout.tsx` metadata `openGraph.images` — there is no generated `opengraph-image` route (it was removed on request).
- Structured data: `components/seo/JsonLd.tsx` (LocalBusiness/ElectronicsStore, rendered in layout) + `FAQPage` JSON-LD inside `FAQ.tsx`.
- Each page has a unique display-font `<h1>`; all images have descriptive `alt`.
- **Contact email shown anywhere must be `admin@intelligentai.services`** (`.services`, not `.systems`).

## Accessibility
- Global `:focus-visible` gold outline; a `.skip-link` to `#main` in the layout.
- `prefers-reduced-motion` media query neutralizes animations (Lenis, walkthroughs, reveals, settle, lighting demo all degrade gracefully).
- Secondary text color (`warm-gray`) is tuned for WCAG AA on charcoal.

---

## Responsive Breakpoints

| Breakpoint | Width    | Notes                                      |
|------------|----------|--------------------------------------------|
| Default    | < 640px  | Single column, mobile typography           |
| sm         | ≥ 640px  | 2-column grids begin                       |
| md         | ≥ 768px  | Navigation changes, card layouts shift     |
| lg         | ≥ 1024px | Full desktop layout, 4-column where needed |
| xl         | ≥ 1280px | Max container (1320px) takes over          |

### Mobile Design Rules
- Navigation becomes hamburger → full-screen overlay
- Hero text scales down via clamp()
- Cards go to single column
- Trust bar remains horizontal scroll
- Tilt effect disabled by default on touch (no mousemove events)
- Tap targets minimum 44px
