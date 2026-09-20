# evel.one

A one page business card for Эвели, laid out as a document rather than a landing page:
masthead, table of contents, numbered sections, figures with captions, rate tables.
The audience is cold contacts from Telegram and Discord direct messages.

## Design

The page reads like a well set paper. Decisions that hold it together:

- **Type.** Source Serif 4 Variable for everything you read, JetBrains Mono Variable for
  labels, section numbers and table figures. Both carry full Cyrillic.
- **Colour.** Warm paper, warm near black ink, one accent (deep rust) used only for section
  numbers, the active entry in the contents rail and the reading progress bar.
- **Rules, not boxes.** Hairlines separate things. There are no cards, no shadows, no
  gradients, no glass.
- **Icons.** Phosphor Icons, light weight, MIT, vendored as paths in `src/ui/icons.tsx`.
  Nothing is pulled from the Anteiku asset gallery.
- **Figures.** Only real screenshots of shipped apps, in `public/shots/`. Each one is cropped
  to a phone aspect with a soft fade at the bottom edge so the crop reads as deliberate.
- **Motion.** Reveal on scroll, a reading progress bar, a contents rail that tracks the
  active section, and a small parallax inside each figure. Nothing pulses or loops.

## Copy rules

No em dashes, no exclamation marks, sentence case, no slang anywhere near money.
Gender is never guessed. All strings live in `src/i18n/strings.ts`, Russian and English
side by side.

## Privacy

The owner's real name is never published. Two screenshots in the source gallery greet the
user by first name (`chekni/light-01-home`, `anteicut/light-01-home`); they are excluded on
purpose. Check any new screenshot for the same before adding it.

## Stack

React 19, Vite, Tailwind 4, `motion`, TypeScript. No backend. Builds to static files and
deploys to Cloudflare Pages.

## Layout

```
src/
  i18n/strings.ts      all copy, ru and en, plus the section id list
  lib/motion.ts        easing and shared variants
  lib/prefs.ts         theme and language, stored per browser
  lib/toc.ts           scrollspy for the contents rail
  ui/icons.tsx         Phosphor paths
  ui/kit.tsx           Reveal, SectionHead, Shot, Tag
  sections/            Header, Masthead, Toc, and one file per numbered section
  index.css            tokens and document typography
public/
  shots/               screenshots of the shipped apps
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
grep -c '—' src/i18n/strings.ts          # must be 0
grep -c '!' src/i18n/strings.ts          # must be 0
```

Screenshots are the proof. Words are not.

## Contact handle

`src/config.ts` holds the Telegram handle in one place. Change it there and nowhere else.
