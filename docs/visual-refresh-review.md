# England 871 visual refresh — local review

Reviewed 20 September 2026 on `codex/england-871-visual-refresh`.
The local review was approved for production deployment on 20 September 2026.

## Implemented

- Shared pale-grey, white, cobalt and yellow theme with locally loaded Fredoka
  Medium and Nunito Sans. No new dependency or external runtime font request.
- Homepage and product-page hero, alternating reader/map/timeline/people rows,
  and a visible library/Explore section. All seven supplied panels are used.
- Complete 1320 × 2868 PNG originals preserved; WebP derivatives total 1.37 MB.
  Responsive images preserve the full canvas. The hero is eager; other panels
  are lazy. Each panel has an accessible full-size link.
- Existing Chronicle sample, family explorer, verified pricing, source notes,
  support/contact links and legal text retained. Updated social preview uses
  the same fonts and panel without changing its URL or dimensions.

## Validation

- `npm run lint` — passed.
- `npm run build` — passed, including TypeScript and all 16 generated routes.
- `npm run check:site -- http://127.0.0.1:3000` — passed against the production
  build served locally. Checks all public pages, metadata endpoints, canonical
  URLs, App Store links, the legacy privacy alias, seven responsive images,
  their aspect ratios, and prior screenshot URLs.
- `/download` still returns HTTP 307 and the exact Location
  `https://apps.apple.com/gb/app/england-871/id6791539102` for GET and HEAD.
  Redirect-like query parameters do not change the destination.
- `/get-app` stays visible. Clicking its button opened the England 871 App
  Store web listing. Its Safari fallback instruction remains in place.
- Rendered the homepage at 320, 390, 768, 1024 and 1440 CSS-pixel widths. No
  horizontal overflow, using document scroll width versus client width.
  Inspected mobile, tablet and desktop screenshots; all seven panels loaded
  with their original proportions and `object-fit: contain`.
- Checked product, fallback, contact, support, privacy, terms and deletion
  pages at mobile width. Existing mailto addresses were retained. No message
  was sent; the site has no contact form or website mail backend to exercise.
- Tested mobile-menu opening and Escape focus return, Chronicle Previous/Next,
  required choice, completion and Restart, family selection, and keyboard FAQ
  expansion. Final production preview had no captured browser errors/warnings.
- Source search found no misleading single-year copy or old email domains in
  the app pages, components, shared config or README. Legal wording, fixed
  download logic, robots/sitemap configuration and Vercel configuration were
  not changed.

## Preview and limitations

Run `npm run build` followed by `npm run start`; open `http://localhost:3000`.
The current review server is bound to `http://127.0.0.1:3000` on this computer.
Local QA images are in the gitignored `outputs/visual-refresh-qa/` folder:
`desktop-home.png`, `desktop-map.png`, `mobile-home.png`, `mobile-panel.png`
and `mobile-get-app.png`.

Responsive testing used the desktop browser at mobile/tablet sizes, not a
physical iPhone, Safari or TikTok. Native App Store launching is not claimed.
Release through the existing `main` → Vercel production workflow. After
deployment, rerun `npm run check:site -- https://chronicleatlas.app` and
confirm the production deployment is Ready and serves the approved revision.
