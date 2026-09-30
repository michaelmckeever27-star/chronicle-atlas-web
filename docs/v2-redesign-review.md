# England 871 version 2.0 marketing redesign

## Product evidence — checked 30 September 2026

The [public UK App Store listing](https://apps.apple.com/gb/app/england-871/id6791539102)
showed version 2.0 live: 871–1485, 103 stories, 162 figures, 192 events, audio and
daily streaks. The prices displayed were £1.99 monthly and £9.99 Premium; the
existing authoritative project configuration identifies £9.99 as annual.
No invented ratings, endorsements, historian review, offline or narration-coverage
claims were introduced.

Milestones were checked against The Royal Family's pages on
[Alfred](https://www.royal.uk/alfred-great-r-871-899),
[William](https://www.royal.uk/william-the-conqueror?page=1),
[Richard III](https://www.royal.uk/richard-iii) and The National Archives'
[Magna Carta](https://www.nationalarchives.gov.uk/explore-the-collection/explore-by-time-period/medieval/magna-carta/).
The journey uses typography and a timeline, not unlicensed decorative historical art.

## Asset provenance

All seven new 1320 × 2868 PNGs were supplied by the site owner for this website.
They are retained unmodified under `public/screenshots/v2/originals/`, with lower-case
stable filenames. WebP derivatives preserve the entire marketing composition,
including its headline, device frame and actual interface. No second frame is added.
Next.js generates appropriately sized responses for each viewport.

`story-crown.webp` is an exact excerpt of the historical depiction already in the
supplied reader panel. `story-alfred.webp` is an exact excerpt of the supplied
library's story thumbnail. These are reused as official app preview artwork, not
claimed new illustrations or independently licensed museum downloads. The small
Alfred source is kept at its native resolution; its limited source detail is not
replaced with generated imagery. The existing village reconstruction and its
evidence notes remain unchanged. No new third-party artwork was downloaded.

Approved CA company and crown/871 app assets, their retained originals, favicons
and touch icons are unchanged. Only the social preview is regenerated to match
the current release, preserving its existing URL and dimensions.

## Behaviour and release workflow

CSS/IntersectionObserver provide short entrances, a desktop sticky preview,
crossfades, decorative ribbon drift and a milestone-line entrance. Content is
visible by default, without JavaScript or animations. Reduced motion disables
animation and sticky enhancement; mobile uses ordinary feature blocks.
The existing website reader and family explorer remain in an expandable sample.

All download actions point directly to the fixed App Store URL. `/download`
keeps its fixed 307 response; `/get-app` remains a visible Safari-instruction
fallback, not an automatic redirect. No claim is made that TikTok can be forced
to launch the native App Store. No analytics service was present or added;
placement labels are non-tracking attributes only.

Legal text changes are limited to the factual period and update date.
No backend, DNS, environment, consent, subscription or deployment-configuration
changes are part of this release.

Production uses the existing `michaelmckeever27-star/chronicle-atlas-web` repository,
`main` branch and Michael McKeever's `chronicle-atlas-web` Vercel project.
Rollback point: `2184d85`, deployment `65QWM8ki8LciD3ZAa8gnerwoNjHY`.

## Validation

- `npm run lint`, `npx tsc --noEmit`, `npm run build`, `npm run check:brand`
  and `npm run check:motion` passed. The production build generated all 16 routes.
- `npm run check:site` passed against the locally served production build:
  eight pages, canonical/OG metadata, favicon/manifest, fixed redirect, legacy
  privacy alias, all seven new panels, responsive derivatives and old image URLs.
- The seven saved PNG originals have the same SHA-256 hashes as the supplied files.
- Rendered homepage checks at 375, 390, 430, 768, 1280 and 1440 CSS-pixel widths
  found no horizontal overflow or clipped headings. The hero download action was
  above the preview on mobile. Product, fallback, contact, support, privacy,
  terms and deletion pages also passed mobile overflow checks.
- Desktop preview matched the active reader stage and released naturally before
  story cards; mobile uses normal blocks with proportionate, contained images.
- Tested mobile-menu opening, Escape and focus return; keyboard FAQ opening and
  closing; sample completion, required choice and Restart; and family selection.
  The sample link opens the existing reader. The fallback download button reached
  the correct England 871 public App Store listing.
- Reduced-motion behaviour, preference changes, mobile/static fallback, observer
  cleanup and CSS overrides were tested with the actual effects in the automated
  harness. Browser media-preference emulation is not exposed by the preview tool,
  so a visually emulated reduced-motion session is not claimed.
- Browser QA images are in gitignored `outputs/v2-redesign-qa/`.
  Tests used a desktop browser at device widths, not a physical iPhone, Safari
  or TikTok. Native App Store launching and physical touch/trackpad testing are
  not claimed. Production checks follow the verified push and are reported in
  the release handoff.
