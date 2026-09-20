# evel.one

Single-page business card for Эвели: Telegram Mini App development, pricing and terms.
Audience is cold contacts from Telegram and Discord direct messages, so the page has to
land the offer, the proof and the price in one scroll.

## Design source

The visual language comes from `github.com/evely-fun/anteiku-design`, folder `design-skill/`.
Read it before changing anything visual. The rules that matter most here:

- Warm paper background, no pure white page, no gradients on surfaces, no glow, no backdrop blur.
- Colour marks a section. Actions are ink coloured.
- Montserrat Variable from fontsource, served locally. Not Inter, not Geist.
- Sentence case everywhere. No caps lock, no spaced micro labels.
- Clay icons name things. Stroke glyphs mark what you click. No emoji as icons, no bare Lucide.
- Copy has no em dashes and no exclamation marks. Slang stays out of anything about money.

## Stack

React 19, Vite, Tailwind 4, `motion`, TypeScript. No backend. Builds to static files
and deploys to Cloudflare Pages.

## Layout

```
src/
  i18n/strings.ts      all copy, ru and en side by side
  lib/motion.ts        easing, springs, shared variants
  lib/prefs.ts         theme and language, stored per browser
  ui/icons.tsx         stroke glyphs drawn by hand
  ui/kit.tsx           Clay, Reveal, Button, SectionHead, Chip
  sections/            one file per section, in page order
  index.css            tokens for both themes
public/
  art/clay/            clay icons taken from the asset gallery
  _headers             CSP, HSTS and cache rules for Cloudflare Pages
qa/
  shot.mjs             screenshot matrix, checks overflow and console errors
  contrast.mjs         measures every text node against WCAG AA in both themes
  gen/                 renders og.png and the touch icon
```

## Checks

```bash
npx tsc -b && npx oxlint && npm run build
npm run dev
node qa/shot.mjs '' light,dark ru,en    # 6 viewports, both themes, both languages
node qa/contrast.mjs                     # AA in light and dark
grep -n '—' src/i18n/strings.ts          # must be empty
grep -n '!' src/i18n/strings.ts          # must be empty
```

Screenshots are the proof. Words are not.

## Contact handle

`src/config.ts` holds the Telegram handle in one place. Change it there and nowhere else.
