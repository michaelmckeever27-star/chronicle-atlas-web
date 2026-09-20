# Chronicle Atlas website

Production-ready marketing and support website for Chronicle Atlas Ltd and its
first iOS app. England 871 is an immersive history app covering medieval England
from 871 to 1399. The site is built with Next.js App Router, TypeScript and plain
CSS. It has no backend and uses no paid APIs at runtime.

## Requirements

- Node.js 20.9 or newer (Node.js 22 LTS recommended)
- npm 10 or newer

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

On Windows PowerShell, use this instead of `cp`:

```powershell
Copy-Item .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For production, set `NEXT_PUBLIC_SITE_URL` in `.env.local` to the canonical site
origin, with no trailing slash. The production fallback is
`https://chronicleatlas.app`.

## Production checks

```bash
npm run lint
npm run build
npm run start
```

With the server running, use a second terminal for route, redirect and image checks:

```bash
npm run check:site -- http://127.0.0.1:3000
```

## Deploy to the existing Vercel site

The production site is already connected to
`michaelmckeever27-star/chronicle-atlas-web` through Vercel’s Git integration.
`main` is the repository’s default and production branch. Do not create a new
Vercel project for routine releases.

1. Run `npm run lint` and `npm run build` locally.
2. Commit the intended source and generated brand assets.
3. Push the verified commit to `origin/main`.
4. Open the existing Chronicle Atlas project in Vercel and wait for the
   production deployment to report **Ready**.
5. Confirm `https://chronicleatlas.app`, `/england-871`, `/privacy`, `/support`
   and `/contact` serve the new commit and that the App Store link resolves.

The existing project must keep `NEXT_PUBLIC_SITE_URL` set to
`https://chronicleatlas.app` so canonical, sitemap and Open Graph URLs remain
correct. Pull requests and non-production branches can be used for Vercel
previews when a change needs review before merging.

## Content and release checklist

- Confirm the England 871 App Store link remains current before each release.
- Confirm the registered company details and preferred contact addresses.
- Review the Privacy Policy before adding analytics, crash reporting or another
  service that processes user information.
- Confirm the RevenueCat configuration and local-data deletion workflow against
  each released app version.

## Site structure

- `/` — Chronicle Atlas home
- `/england-871` — England 871 product page
- `/download` — fixed temporary redirect to the England 871 App Store listing
- `/get-app` — visible App Store fallback page for restricted in-app browsers
- `/privacy` — privacy policy
- `/terms-of-use` — published terms of use
- `/support` — user support
- `/account-deletion` — local data deletion instructions
- `/contact` — company contact

SEO metadata, Open Graph imagery, `robots.txt` and `sitemap.xml` are generated
through the Next.js metadata APIs.

## Brand assets

The company identity is the uploaded cobalt/yellow CA monogram and lettering;
the separate England 871 app identity is the uploaded crown/871 artwork.
Exact, unmodified uploads are retained in `assets/brand/originals/`.
Rebuild their raster derivatives, favicons, touch icon and social preview with:

```bash
npm run brand:build
```

Generated files are written to `public/brand`, `app/icon.png`,
`app/apple-icon.png` and `public/og.png`. `BrandLogo` uses the complete company
lockup (no adjacent duplicate name); `AppIcon` uses only the England 871 icon.
Both use lossless web derivatives with intrinsic dimensions and hashed static
imports. Header/footer links retain their accessible homepage label.

The company PNG is transparent, not black-backed. Its empty outer padding is
trimmed, preserving the artwork's alpha and soft edges; the CA symbol is cropped
from the transparent gap before the lettering. The opaque 707 × 699 app JPEG
receives four copied edge rows above and below before proportional resizing—
no artwork is cropped, stretched or recoloured. The footer places the unchanged
company logo on a white surface; favicons/touch icons also have white canvases
so cobalt remains visible in dark browser chrome. The website is light-only.
These are raster assets, not claimed vector recreations.

Run `npm run check:brand` to verify source hashes, crop fidelity, dimensions and
alpha, then `npm run check:site -- http://127.0.0.1:3000` against a running local
build. Old Atlas Seal exports and geometry are retained only as unused legacy
files; no current component, metadata or asset-generation script references
them. The former `/england-871-app-icon.png` URL serves the new app artwork for
backwards compatibility.

The site uses Fredoka Medium (500) for headings, with
Nunito Sans (400–800) for body text and controls. Latin WOFF2 subsets are
self-hosted and loaded with `next/font/local`; no runtime font service is used.
Their SIL Open Font Licenses are retained beside the font files. The TTF files
are used only by the social-image build script, not downloaded by site visitors.
Legacy Source Serif files are retained for reference. The company wordmark
comes directly from the upload, not from a web font.

Shared colours and spacing are defined in `app/globals.css`. Regenerate the
current social preview with
`npm run social:build` (also called by `brand:build`). Its URL and 2400 × 1260
dimensions are unchanged.

### App Store panels

All seven supplied 1320 × 2868 marketing PNGs are retained in
`public/screenshots/app-store/originals/`. Each already contains its headline,
iPhone frame and app screen: never add another device frame or crop the panel.
Generate full-resolution WebP derivatives with:

```bash
npm run screenshots:build
```

`lib/screenshots.ts` holds their paths and alt text. `MarketingScreenshot` uses
Next.js responsive image optimisation, explicit dimensions, a priority hero
image, lazy below-fold images and full-size links. `AppTour` presents visible
feature sections, not a carousel. Older screenshot paths remain available.
The 80-story count is supported by the supplied Story Library panel; recheck
it when replacing the panels. Labelled artistic reconstructions in the website
Chronicle sample retain their evidence and source notes.

### September 2026 visual refresh

The visual refresh was reviewed locally on `codex/england-871-visual-refresh`
and approved for production on 20 September 2026. Validation details are in
`docs/visual-refresh-review.md`. Review future changes with `npm run build`
then `npm run start`, or use `npm run dev` while editing. Check `/`,
`/england-871`, `/get-app`, support and legal routes at mobile and desktop
widths before releasing through the existing `main` → Vercel workflow.

## Current product facts

- England 871 covers medieval England from 871 to 1399.
- The app uses three main tabs: Today, Explore and Saved.
- People, Stories & Series, Timeline and Map are destinations within Explore.
- The app is free to download; Premium is £1.99 per month or
  £9.99 per year in the UK, with the same Premium access on both plans.
- App Store purchases and subscriptions are completed in the iPhone app.
- The app has no Chronicle Atlas account; reading progress is stored locally.

## Release verification

On 16 September 2026, the UK App Store listing showed the updated app and both
£1.99 monthly and £9.99 annual Premium products. The matching website and
screenshots were then deployed to `chronicleatlas.app` through the production
branch. Recheck App Store pricing before changing subscription copy in future.
