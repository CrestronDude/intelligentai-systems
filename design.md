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
| Warm Gray       | `#7A7670` | Body text, meta information              |
| Warm Gray Light | `#A09C96` | Disabled states, secondary meta          |

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

## Animation & Interaction Guidelines

### Entrance Animations
- **FadeUp**: Default entrance for most elements (`animate-fade-up`)
- **FadeIn**: Images and full-section reveals
- **SlideInLeft**: Left-to-right reveals for sidebars and content panels
- Delay stagger: Use `.animation-delay-100` through `.animation-delay-800` (100ms steps)

### Scroll Interactions
- **Parallax Hero**: Image scrolls at 35% of scroll speed (`translateY(scroll * 0.35)`)
- **IntersectionObserver**: All sections use IO with `threshold: 0.1` for entrance triggers
- **Trust Bar**: Animated horizontal scroll at 0.3px/frame via RAF

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
// next.config.ts
remotePatterns: [
  { protocol: "https", hostname: "images.unsplash.com" },
  { protocol: "https", hostname: "plus.unsplash.com" },
]
```

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

- All pages use Next.js `metadata` export with `title`, `description`, `openGraph`, `twitter`
- Title template: `"Page Name | AI Intelligent Services"`
- Each page has a unique `<h1>` using display font
- Images have descriptive `alt` text
- `metadataBase` set to `https://intelligentai.systems`

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
