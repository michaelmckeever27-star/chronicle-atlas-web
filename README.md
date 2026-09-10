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

The approved Atlas Seal uses one path-and-viewBox source in
`lib/atlas-seal.json`. The shared React logo and every exported asset use that
same geometry. Rebuild the favicon, touch icon, Open Graph image, transparent
PNG exports and SVG variants with:

```bash
npm run brand:build
```

Generated files are written to `public/brand`, `app/icon.png`,
`app/apple-icon.png` and `public/og.png`. Do not edit generated variants
individually; update the master geometry and rebuild them together.

Source Serif 4 is used for editorial headings and the live wordmark. Its SIL
Open Font License is retained at `public/fonts/SOURCE-SERIF-4-LICENSE.txt`.
The product screenshots and labelled artistic reconstructions are approved
England 871 v1.2 assets. The website preserves their native proportions and
serves them through Next.js image optimisation.

## Current product facts

- England 871 covers medieval England from 871 to 1399.
- The current public release is version 1.2.
- The app is free to download; optional Premium is £19.99 per year in the UK.
- App Store purchases and subscriptions are completed in the iPhone app.
- The app has no Chronicle Atlas account; reading progress is stored locally.
