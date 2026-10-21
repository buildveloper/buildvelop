# buildveloper — Christopher John Portfolio

A premium single-page portfolio for **Christopher John (buildveloper)** — AI Software Engineer, automation builder, and product engineer based in Abuja, Nigeria.

Built with Next.js (App Router), Tailwind CSS, Framer Motion, and Lenis. The page is designed mobile-first, respects `prefers-reduced-motion`, and ships with SEO metadata, Open Graph images, a sitemap, and JSON-LD.

**Live target:** `https://buildveloper.com`

---

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

---

## Edit content

All copy, links, project descriptions, gradients, and the contact email live in:

```
data/content.ts
```

The only email on the site is **buildveloper@gmail.com**. The Cal.com booking link is `https://cal.com/buildveloper`.

The portrait is referenced by `hero.portrait` and currently points to:

```
public/portrait.jpg
```

Replace that file with your final high-resolution portrait (4:5 works best). No code change needed.

---

## Contact form (Formspree)

The form posts to Formspree. Add your endpoint in either place:

1. `contact.formEndpoint` in `data/content.ts`, or
2. `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in `.env.local` / Vercel.

Create a form at [formspree.io](https://formspree.io/) and paste the endpoint, for example:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

If the endpoint is left empty, the form does **not** fake a success. It opens a prefilled email to `buildveloper@gmail.com` instead, and shows a note explaining that.

---

## Preview screenshots

The 13 project screenshots are committed in `public/previews/`. The app uses them locally — no external screenshot service is called at runtime or build time.

To refresh them after a live site changes:

```bash
npx playwright install chromium
npm run previews
```

Edit the target list in `scripts/capture-previews.mjs` if a URL or slug changes. If a capture fails, the UI automatically falls back to a branded gradient card with the project initial.

---

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import the repository in Vercel. Next.js is detected automatically.
3. Add these environment variables:
   - `NEXT_PUBLIC_SITE_URL` = `https://buildveloper.com`
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT` = your Formspree endpoint (optional if set in `data/content.ts`)
4. Deploy.
5. Add `buildveloper.com` in **Vercel → Settings → Domains** and follow the DNS instructions.

CLI alternative:

```bash
npx vercel
npx vercel --prod
```

---

## Project structure

```
app/                     App Router, metadata, OG image, sitemap, robots
components/layout/       Nav, footer, cursor, grain, scroll progress
components/sections/     Hero, stats, services, products, websites,
                         impact, process, experience, tools, contact
components/ui/           Reusable motion and card primitives
data/content.ts          Single source of truth for all copy and links
lib/                     Utilities, motion tokens, gradients, hooks
public/portrait.jpg      Profile portrait
public/previews/         Committed project screenshots
scripts/                 Playwright screenshot capture
```

---

## Design system

- **Base:** `#07070B` near-black (dark) / `#F6F2EA` warm off-white (light)
- **Accents:** electric violet, hot pink, sunrise orange, cyan, lime
- **Display type:** Space Grotesk · **Body:** Inter (both self-hosted via Fontsource)
- **Shape:** 28–40px rounded cards, glass surfaces, 1px gradient borders on hover
- **Motion:** Framer Motion + Lenis; duration `0.18–0.8s`, custom `[0.22, 1, 0.36, 1]` easing
- **Reduced motion:** transforms, marquees, tilt, cursor, rotating words, and sparkles are disabled; counters jump to final values

---

## What to replace

1. **Portrait** — `public/portrait.jpg` (currently the provided photo).
2. **Formspree endpoint** — `contact.formEndpoint` or `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.
3. **Preview screenshots** — run `npm run previews` when a live site changes.
4. **Brand logos** — tools without a public mark use styled monograms; swap in official assets if desired.

**Already real, not placeholders:** `buildveloper@gmail.com`, `https://cal.com/buildveloper`, LinkedIn, WhatsApp, and `https://theforge.ng`.

---

## Content notes

- No testimonials, revenue figures, or metrics were invented.
- The six impact cards use only the details provided; the legal intake card is the only one with the `15+ hrs/week` figure.
- AshevilleRE is described as the live product actually is: a public-records property intelligence tool for Buncombe County, not a listings platform.
- The old site's `chris@buildveloper.com`, X/Twitter handle, Google Drive links, and generic "operational chaos" copy were intentionally removed.
