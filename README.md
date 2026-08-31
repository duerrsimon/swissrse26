# RSEs in the age of personalized software

When anyone can make the tool they need, what is a research software engineer for?

20-minute talk + 10 minutes of discussion — Annual Swiss RSE Day 2026, CAB Building, ETH Zurich,
31 August 2026. Audience: RSEs from academia, research and industry.

## Run

```bash
pnpm install
pnpm dev          # http://localhost:3030 — presenter view at /presenter
```

The talk **ends on slide 17**. Slides 18–19 are the discussion: a live show-of-hands poll that you
tally on the slide with the drawing tool (toolbar, bottom left), and the question the poll sets up.
`drawings.persist` is `false`, so the tally clears if the deck is given twice.

## Build / export

```bash
pnpm build                          # → dist/
pnpm add -D playwright-chromium
pnpm export                         # → slides-export.pdf
```

## Structure

| path | what it holds |
|---|---|
| `slides.md` | the whole deck, 20 slides, speaker notes on every slide |
| `style.css` | the shared house styles — `.thesis`, `.src`, `.big`, `.hand`, `.ok`/`.mid`/`.bad` |
| `components/SignalMeter.vue` | the Bluetooth meter from the opening anecdote, driven by `$clicks` |
| `components/RuntimeLadder.vue` | the six runtime rungs on slide 14, `:step="$clicks"` |
| `components/RolePills.vue` | four-item corner marker — **unused**, the deck dropped it; kept in case it comes back |
| `setup/shiki.ts` | code highlighting themes |
| `img/` | images, referenced as `/img/foo.png` — no `public/` dir, Vite hashes them at build |
| `img/SOURCES.md` | provenance and licence for every borrowed image |
| `netlify.toml`, `vercel.json` | SPA rewrite + `dist` as publish directory |

Conventions follow the sibling decks in `../alphafold_dataengineering`, `../midicreation` and
`../gradiobio`.

## Sources for the two opening anecdotes

- Ben Zhang (@un1c0rnioz), <https://x.com/un1c0rnioz/status/2084686552299634805> — the Bluetooth
  phone finder, January 2026.
- Lior Pachter, ["The Quickening"](https://liorpachter.wordpress.com/2026/02/19/the-quickening/),
  *Bits of DNA*, 19 February 2026 — the Sleuth and edgeR ports; code at
  <https://github.com/pachterlab/edgePython>.

## Licence

Text and components are mine. Any third-party images used are reproduced for teaching under fair
use, so the deck as a whole carries no CC licence; provenance is recorded in `img/SOURCES.md`.
