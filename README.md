# AI Intelligent Services — intelligentai.systems

Luxury marketing site for **AI Intelligent Services** — premium smart-home automation and corporate AV integration (and an Authorized JBL Dealer) serving the Greater Toronto Area and Canada-wide.

Built to feel expensive, cinematic, and trustworthy: dark charcoal + brushed gold, Cormorant Garamond display type, global smooth scrolling, and continuous scroll-driven "walk through the spaces" motion.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (config lives in `src/app/globals.css` `@theme`, not `tailwind.config.ts`)
- **Lenis** smooth scrolling · custom rAF scroll-scrub walkthroughs · global `data-reveal` engine
- **react-hook-form** + **zod** contact form → **Brevo** transactional email, protected by Vercel **BotID**
- Deployed on **Vercel** (auto-deploys on push to `main`)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — run before committing
npm run lint     # ESLint
```

## Pages

`/` home · `/services` · `/invisible-audio` (JBL CONCEAL + DA amps) · `/outdoor` (Outdoor Living) · `/projects` (case studies) · `/about` (story + certifications) · `/contact`

## Documentation

- **`CLAUDE.md`** — maintenance guide; read first. Covers the file map, the Motion & UI system, common tasks, and the live contact form.
- **`design.md`** — authoritative design + motion system (colors, type, components, the signature scroll motion, SEO, accessibility).
- **`project-structure.md`** — full file tree, dependencies, and color tokens.

## Notes

- Contact email everywhere is **`admin@intelligentai.services`** (`.services`).
- The contact API needs **`BREVO_API_KEY`** set in Vercel (production).
- Brand/product imagery is hosted locally in `public/images/`.
