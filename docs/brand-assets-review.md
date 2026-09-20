# Uploaded brand assets — release review

Implemented and reviewed locally on `codex/uploaded-brand-assets` without
publishing. Subsequently approved for release through the existing
`main` → Vercel production workflow.

## Artwork and preparation

- `assets/brand/originals/chronicle-atlas-upload.png`: exact 1942 × 809 upload;
  SHA-256 `aa50e45e81119f41829bfcb6a47ca1b5fba03bc6e2f1dacb9ffdf1c6a34c1985`.
  It has genuine transparency, not a black background or viewer controls.
  Main artwork crop: x190, y170, 1562 × 450. CA-only crop: x190, y170,
  457 × 448. Original RGBA pixels remain unchanged inside each crop, including
  soft edges. Near-invisible stray alpha outside the art is excluded by the
  crop; alpha is not thresholded or removed from the artwork.
- `assets/brand/originals/england-871-upload.jpeg`: exact 707 × 699 upload;
  SHA-256 `bdeec345368f6567f85a5b139b996462479c1042fc6d0899dc53be5d60fa8c8e`.
  This is opaque cobalt-backed artwork. Four copied edge rows above and below
  make a square canvas without stretching or removing any original content.
- All derivatives are raster, faithfully cropped/padded and proportionally
  resized. No generated artwork, recolouring, vector substitute or internal
  shadow was added. Original JPEG compression remains part of the source.
- White surfaces behind the footer logo and small icons keep the supplied
  cobalt visible. The website explicitly uses a light colour scheme; it has
  no separate dark-mode theme.

## Changed assets and components

- `public/brand/chronicle-atlas-logo.{png,webp}` and
  `public/brand/chronicle-atlas-symbol.png`.
- `public/brand/chronicle-atlas-icon-{16,32,180,192,512}.png`,
  `app/icon.png`, and `app/apple-icon.png`.
- `public/brand/england-871-app-icon.{png,webp}` and the compatibility URL
  `public/england-871-app-icon.png`.
- `public/og.png`, with both supplied identities and the existing screenshot.
- `components/BrandLogo.tsx`, `components/AppIcon.tsx`,
  `components/Header.tsx`, and `components/Footer.tsx`.
- `app/page.tsx`, `app/england-871/page.tsx`, `app/get-app/page.tsx`,
  `app/globals.css`, `app/layout.tsx`, and `app/manifest.ts`.
- Brand/social generation scripts, brand/site verification scripts,
  `package.json` commands and `README.md` documentation.

Obsolete Atlas Seal exports remain as unreferenced legacy files so their old
public URLs do not break. No current rendered page, metadata or brand-generation
script uses that identity. Existing screenshots and galleries are unchanged.

## Verification

- `npm run lint`: passed.
- `npm run build`: passed, including TypeScript and all 16 generated routes.
- `npm run check:brand`: passed (source hashes, exact crops/alpha, dimensions,
  light icon canvases, app padding and compatibility asset).
- `npm run check:site -- http://127.0.0.1:3002`: passed for all public pages,
  brand/image URLs, image ratios, legacy screenshots, canonical/OG metadata,
  company/product structured data references, manifest and touch-icon links.
- `/download` GET/HEAD retains its fixed 307 App Store destination, including
  when redirect-like query parameters are supplied. `/get-app` stays visible
  with the original App Store button and Safari instruction.
- Browser-rendered homepage/header/footer/app identity inspected at mobile
  and desktop sizes; 320, 390, 1024 and 1440px layouts have no horizontal
  overflow or logo/navigation collision. Download action is above the fold
  on the checked mobile homepage sizes. Product and `/get-app` mobile views
  also have no overflow. Header link navigates home. Mobile menu opens, and
  Escape closes it and restores focus to its button.
- Actual 16/32px favicons, the 180px touch icon and 2400 × 1260 social preview
  were inspected. No captured browser warnings/errors in the final preview.
- Routes, screenshot assets, pricing, legal copy, App Store links and deployment
  configuration were not changed. No iOS project or App Store Connect changes.

Testing used a desktop browser with responsive viewports, not a physical iPhone.

## Preview

The local production-build preview is at `http://127.0.0.1:3002/`.
To restart it: `npm run build`, then
`npm run start -- --hostname 127.0.0.1 --port 3002`.

Actual rendered screenshots are in the gitignored `outputs/brand-qa/` folder:
`desktop-home.png`, `desktop-footer.png`, `mobile-home.png`,
`mobile-footer.png`, `mobile-product.png`, and `mobile-get-app.png`.
