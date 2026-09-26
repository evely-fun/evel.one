# evel.one

A one page business card for Эвели, laid out as a document rather than a landing page:
masthead, table of contents, numbered sections, figures with captions, rate tables.
The audience is cold contacts from Telegram and Discord direct messages, so the page has to
land the offer, the proof and the price in one scroll.

The offer covers Telegram bots and Mini Apps, Discord bots and servers, and websites.

## Design

The page reads like a well set paper, at full desktop width rather than a narrow column.

- **Type.** Montserrat Variable for headings, the navbar, labels and figures (`.ui`, `.label`,
  `.mono`). Source Serif 4 Variable for everything you actually read. Both carry full Cyrillic.
  Montserrat carries the brand; the serif carries the long text, which Montserrat reads badly at.
- **Width.** `.page` runs to 1760px. The fold puts the title on the left and the whole table of
  contents on the right, so nothing sits empty above the scroll. Sections use the full width:
  security runs three across, the rate table gives the description its own column.
- **Colour.** Warm paper, warm near black ink, one accent (deep rust) on section numbers, the
  active contents entry, the reading progress bar and the add-on price lines.
- **Rules, not boxes.** Hairlines separate things. No cards, no shadows, no gradients, no glass.
- **No slop tells.** `.label` is sentence case, not tracked-out all caps. Only the seven document
  sections carry numbers; items inside a section never get their own `01 02 03` counters. Chips are
  hairline outlines, never filled pills.
- **Icons.** Phosphor Icons, light weight, MIT, vendored as paths in `src/ui/icons.tsx`.
  Nothing comes from the Anteiku asset gallery.
- **Figures.** Only real screenshots of shipped work, in `public/shots/`. `Shot` takes a `ratio`:
  the default phone frame crops to `390/844` with a soft fade at the bottom edge, and a landscape
  ratio renders whole, with no crop, no fade and no parallax. A lone figure spans its column.
- **Motion.** Reveal on scroll, a reading progress bar, a contents rail that tracks the active
  section, and a small parallax inside phone figures. Nothing pulses or loops.
- **Scrollbar.** Thin, drawn from the tokens, in both themes.

## Copy rules

No em dashes, no exclamation marks, sentence case, no slang anywhere near money.
Gender is never guessed. Russian is the default language and does not follow the browser.
All strings live in `src/i18n/strings.ts`, Russian and English side by side.

En dashes inside numeric ranges (`$20–70`) are correct typography and are allowed. The banned
character is the em dash.

## Privacy

The owner's real name is never published. Two screenshots in the source gallery greet the user
by first name (`chekni/light-01-home`, `anteicut/light-01-home`); they are excluded on purpose.
Check any new screenshot for the same before adding it.

## Stack

React 19, Vite, Tailwind 4, `motion`, TypeScript. No backend. Builds to static files and
deploys to Cloudflare Pages as the project `evel-one`.

## Layout

```
src/
  config.ts            contacts, the Discord invite and the payment rails
  i18n/strings.ts      all copy, ru and en, plus the section id list
  lib/motion.ts        easing and shared variants
  lib/prefs.ts         theme and language, stored per browser
  lib/toc.ts           scrollspy for the contents rail
  ui/icons.tsx         Phosphor paths
  ui/kit.tsx           Reveal, SectionHead, Shot, Tag
  sections/            Header, Masthead, Toc, and one file per numbered section
  index.css            tokens, document typography, scrollbar
public/
  shots/               screenshots of the shipped work
  _headers             CSP, HSTS and cache rules for Cloudflare Pages
qa/
  shot.mjs             screenshot matrix, checks overflow and console errors
  contrast.mjs         measures every text node against WCAG AA in both themes
  gen/                 renders og.png and the touch icon
```

## Checks

```bash
npx tsc -b && npx oxlint . && npm run build
npm run dev
node qa/shot.mjs '' light,dark ru,en    # 6 viewports, both themes, both languages
node qa/contrast.mjs                     # AA in light and dark
grep -c '—' src/i18n/strings.ts          # must be 0
grep -c '!' src/i18n/strings.ts          # must be 0
```

`qa/contrast.mjs` resolves colours through a canvas rather than reading them as text, because
Chromium returns `oklch()` and a naive parser reports nonsense. `qa/shot.mjs` skips children of
horizontal scrollers, since the mobile figure rail overflows on purpose.

Screenshots are the proof. Words are not.

## Deploying

`./deploy.sh`, or the same three lines by hand. Needs `CLOUDFLARE_API_TOKEN` scoped to
Account → Cloudflare Pages → Edit, with the account itself included under Account Resources,
plus `CLOUDFLARE_ACCOUNT_ID`. A token that passes `/user/tokens/verify` but returns zero
accounts from `/accounts` is missing that resource scope.

The site is live at `https://evel.one` and `https://www.evel.one`. The zone sits in the same
Cloudflare account as the Pages project, on the `rene`/`serenity` nameservers, with one proxied
CNAME each for `@` and `www` pointing at `evel-one.pages.dev`. Adding a custom domain through the
API leaves it `pending` until DNS is in place: the Pages endpoint cannot write the record itself
unless the token also carries Zone edit rights.
