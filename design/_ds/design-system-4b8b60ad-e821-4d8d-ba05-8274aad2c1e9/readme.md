# AISI Design System

A design system built for **AISI**, a French IT services / consulting firm (cloud, data, cybersecurity, DevOps). It packages the brand's color system, typography, spacing, reusable React UI components, and a marketing-site UI kit so that design agents can generate on-brand interfaces and assets.

## Source material

The only supplied source was a single brand-guideline page:

- `uploads/design.png` — the official **"3-COULEURS"** color-palette page, showing five core colors at 100 % / 60 % / 30 % intensity, with a partial ninja-mascot illustration in the margin.

Everything else (type scale, spacing, shadows, components, UI kit) is **derived** from that palette and standard best practice. No codebase, Figma file, fonts, or logo files were provided. See **Caveats** below.

## Brand context

AISI positions itself as a technical partner "proche du terrain" (close to the field). Product copy in this system is written in **French**, matching the brand's market. The tone is professional, confident, and concrete — outcome-focused rather than buzzword-heavy.

---

## CONTENT FUNDAMENTALS

- **Language:** French. Copy is written for a B2B / public-sector audience.
- **Voice:** "Nous" (we) for the company; "vous/votre" (formal you) for the reader. Never "tu".
- **Tone:** confident and grounded. Leads with client outcomes ("Accélérez votre transformation numérique"), backs claims with concrete numbers (+450 projets, 98 % de clients fidèles).
- **Casing:** Sentence case for body and most headings. UPPERCASE reserved for small labels/badges and eyebrow tags (tracked +0.06em). Never all-caps long headings.
- **Punctuation:** French typographic conventions — accents preserved (é, à, ç), « guillemets » where quotes appear.
- **Emoji:** none. The brand does not use emoji in product or marketing copy.
- **Example phrases:** "Parlons de votre projet", "Un premier échange gratuit, sans engagement", "Des experts proches du terrain".

## VISUAL FOUNDATIONS

- **Colors:** five brand colors — Blue `#31A3DD` (primary), Orange `#F06A36` (accent, used sparingly for a single emphasis per view), Navy `#21578E` (deep brand blue, headings & dark surfaces), Gray `#727480` (neutral), White. Each brand color is used at 100 / 60 / 30 intensities (the official system). A 10-step neutral ramp is derived from the gray.
- **Type:** display/headings in a bold geometric sans (Montserrat substitute, 700–800, tight tracking); body in a humanist sans (Mulish); mono for code/tokens (JetBrains Mono). Scale is a 1.25 major-third ramp.
- **Spacing:** 4px base grid (4/8/12/16/24/32/48/64/80).
- **Backgrounds:** predominantly white and very light gray (`--gray-50`). Navy is used for full-bleed bands (stats, footer, page headers). Subtle blue→navy gradients used only on the hero and CTA blocks — not as a default surface. No textures, no patterns, no hand-drawn illustration in the system itself.
- **Corner radii:** generous and soft — cards 16px, inputs/buttons-secondary 10px, buttons & badges fully pill-shaped (999px). Tags are squarer (6px).
- **Cards:** white, 16px radius, 1px hairline border (`--border-subtle`), soft **navy-tinted** shadow. Optional 3px top accent stripe (blue/orange/navy) and an interactive lift (translateY -2px + deeper shadow) on hover.
- **Shadows:** four soft, cool (navy-tinted) elevation levels — never harsh black. Focus ring is a 3px translucent-blue halo.
- **Buttons:** pill-shaped, Montserrat semibold. Hover **darkens toward navy**; press nudges down 1px and scales to 0.99 (subtle shrink).
- **Hover states:** buttons darken; cards lift; nav items get a subtle tinted pill. Links go navy on hover.
- **Motion:** quick and understated — 120–320ms, standard ease `cubic-bezier(0.2,0,0.1,1)`. No bounces, no infinite decorative loops.
- **Transparency & blur:** the sticky header is translucent white with a 10px backdrop blur; the dialog scrim is 45% navy with a 2px blur. Used sparingly.
- **Imagery vibe:** cool, blue-forward, clean and corporate. (No brand photography was supplied — use cool-toned, professional imagery when needed.)

## ICONOGRAPHY

- No icon set was supplied with the source. Icons in this system are drawn as **inline SVG in the Lucide style** (2px round-cap strokes, 24px grid) — a widely available open set that matches the clean, geometric brand feel.
- **Recommended set for new work:** [Lucide](https://lucide.dev) via CDN (`https://unpkg.com/lucide@latest`), stroke-width 2, round caps/joins. This is the closest match to the hand-authored glyphs used here and is flagged as a **substitution** (see Caveats).
- Icons are monochrome, inheriting `currentColor`; tint them navy/blue on light surfaces, white on dark.
- **Emoji / unicode icons:** not used.

## Logo / brand mark

The **official AISI logo** was supplied and is stored in `assets/logo/`:

- `aisi-logo-full.png` — full logo: blue **AISI** wordmark + tagline *"Infrastructure, Cybersécurité & Gouvernance"*. Use on light backgrounds where the tagline reads.
- `aisi-mark.png` — wordmark only (tagline cropped), for compact placements like the site header.
- `aisi-logo-full-white.png` / `aisi-mark-white.png` — white knockout versions for dark (navy) surfaces.

The mark is the brand blue `#31A3DD`; the tagline is neutral gray. Give the logo clear space and never recolor the blue mark to another hue. See `guidelines/foundations/brand-wordmark.html`.

---

## Index / manifest

- `styles.css` — root entry point; `@import`s all token files. Consumers link this one file.
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` — CSS custom properties (base + semantic).
- `guidelines/foundations/*.html` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — reusable React primitives (see below).
- `ui_kits/website/` — interactive AISI marketing-site recreation (Home, Services, About, Contact).
- `templates/landing-page/` — **Landing Page** template (`LandingPage.dc.html`) consuming projects can copy as a starting point.
- `assets/` — brand assets. *(Currently none beyond notes — no logo/imagery supplied.)*
- `SKILL.md` — Agent-Skill wrapper for use in Claude Code.

### Components

Grouped by concern under `components/`:

- **core/** — `Button`, `IconButton`, `Badge`, `Tag`, `Card`
- **forms/** — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
- **feedback/** — `Alert`, `Dialog`, `Tooltip`
- **navigation/** — `Tabs`

Because the source defined no component inventory, this is a standard general-purpose set sized to the brand (documented as an **intentional authored set**, not derived from a source library). Each component reads styling from the CSS custom properties and ships with a `.d.ts` contract and `.prompt.md` usage note.

### UI kits

- **website/** — AISI corporate marketing site. Interactive: navigate between Accueil / Services / À propos / Contact; the Services page has a working expertise switcher; the Contact page has a validating, submittable form.

---

## Font substitution (action needed)

The brand's real typefaces are unknown (not in the source). Substitutes chosen:

| Role | Substitute (Google Fonts) |
|---|---|
| Display / headings | **Montserrat** |
| Body | **Mulish** |
| Mono | **JetBrains Mono** |

**Please confirm or supply the real brand fonts** so these can be swapped.

## Caveats

1. **Fonts are substituted** (see above) — flagged for replacement.
2. **Icons are a Lucide-style substitution** — no official icon set supplied.
3. **Colors are exact** to the supplied palette; everything else (type scale, spacing, shadows, components, copy) is a reasonable, standard interpretation and should be validated against real AISI brand guidelines if they exist.
