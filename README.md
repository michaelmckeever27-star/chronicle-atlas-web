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

Before launch, set `NEXT_PUBLIC_SITE_URL` in `.env.local` to the canonical site
origin, with no trailing slash. The production fallback is
`https://chronicleatlas.app`.

## Production checks

```bash
npm run lint
npm run build
npm run start
```

## Deploy to Vercel — dashboard

1. Push this project to a GitHub, GitLab or Bitbucket repository.
2. Sign in to [Vercel](https://vercel.com) and choose **Add New → Project**.
3. Import the repository.
4. Leave **Framework Preset** set to **Next.js**.
5. Leave the build command as `next build` and the output directory as the
   Next.js default. No root-directory change is needed.
6. Add an environment variable named `NEXT_PUBLIC_SITE_URL` with the final
   production origin, for example `https://chronicleatlas.app`.
7. Select **Deploy**.
8. In **Project Settings → Domains**, add the production domain. If its value
   differs from step 6, update `NEXT_PUBLIC_SITE_URL` and redeploy so canonical
   and Open Graph URLs are correct.

Every push to the production branch will create a production deployment;
pull requests and other branches receive preview deployments automatically.

## Deploy to Vercel — CLI alternative

```bash
npm install -g vercel
vercel login
vercel
vercel env add NEXT_PUBLIC_SITE_URL production
vercel --prod
```

When prompted by `vercel`, accept the detected Next.js settings. Enter the
final public origin when adding `NEXT_PUBLIC_SITE_URL`.

## Content and launch checklist

- Replace the App Store placeholder when the final listing URL is available.
- Confirm the registered company details and preferred contact addresses.
- Have the draft Terms of Use reviewed by a qualified legal professional.
- Update the Privacy Policy before launch if analytics or crash reporting are
  added, naming the provider and the data it processes.
- Confirm the final subscription price, RevenueCat configuration and account
  deletion workflow in the shipped app.

## Site structure

- `/` — Chronicle Atlas home
- `/england-871` — England 871 product page
- `/privacy` — privacy policy
- `/terms-of-use` — pre-launch terms draft
- `/support` — user support
- `/account-deletion` — account and data deletion instructions
- `/contact` — company contact

SEO metadata, Open Graph imagery, `robots.txt` and `sitemap.xml` are generated
through the Next.js metadata APIs.
