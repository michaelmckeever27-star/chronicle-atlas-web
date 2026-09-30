import assert from "node:assert/strict";
import { readdir } from "node:fs/promises";
import sharp from "sharp";

// Run against a local build: npm run check:site -- http://127.0.0.1:3000
const base = process.argv[2] ?? "http://127.0.0.1:3000";
const destination = "https://apps.apple.com/gb/app/england-871/id6791539102";
const routes = [
  "/",
  "/england-871",
  "/get-app",
  "/privacy",
  "/terms-of-use",
  "/support",
  "/account-deletion",
  "/contact",
];
for (const route of routes) {
  const response = await fetch(new URL(route, base), { redirect: "manual" });
  assert.equal(response.status, 200, route);
  const html = await response.text();
  assert.match(html, /<h1[\s>]/, `${route}: heading`);
  assert.ok(
    html.includes(
      `rel="canonical" href="https://chronicleatlas.app${route === "/" ? "" : route}`,
    ),
    `${route}: canonical`,
  );
  assert.match(html, /property="og:image"/, `${route}: Open Graph`);
  assert.ok(
    !html.includes("@chronicleatlas.com"),
    `${route}: current email domain`,
  );
  assert.ok(
    !html.includes("871–1399") && !html.includes("871 to 1399"),
    `${route}: current historical coverage`,
  );
  assert.ok(
    !html.includes("atlas-seal"),
    `${route}: no obsolete branding references`,
  );
  assert.ok(
    html.includes("chronicle-atlas-logo"),
    `${route}: uploaded company logo`,
  );
  assert.ok(
    html.includes(
      '"logo":"https://chronicleatlas.app/brand/chronicle-atlas-logo.png"',
    ),
    `${route}: company schema uses supplied logo`,
  );
  assert.ok(
    html.includes("/brand/chronicle-atlas-icon-16.png"),
    `${route}: CA favicon`,
  );
  assert.ok(
    html.includes(
      'rel="apple-touch-icon" href="/brand/chronicle-atlas-icon-180.png"',
    ),
    `${route}: Apple touch icon`,
  );
  if (route === "/england-871") {
    assert.ok(
      html.includes(
        '"image":"https://chronicleatlas.app/brand/england-871-app-icon.png"',
      ),
      "Product schema uses app artwork",
    );
  }
  if (route === "/") {
    for (const id of ["tour", "journey", "stories", "sample", "pricing", "faq"])
      assert.ok(html.includes(`id="${id}"`), `Homepage section ${id}`);
    for (const placement of [
      "hero",
      "navigation",
      "feature-section",
      "final-cta",
    ])
      assert.ok(
        html.includes(`data-download-placement="${placement}"`),
        `Download placement ${placement}`,
      );
    assert.ok(
      html.includes("103") &&
        html.includes("162") &&
        html.includes("192") &&
        html.includes("871–1485"),
      "Version 2.0 facts",
    );
    assert.ok(
      html.includes("/screenshots/v2/01-daily-history.webp"),
      "Current hero composition",
    );
  }
  for (const match of html.matchAll(
    /href="(https:\/\/apps\.apple\.com\/[^"\s]+)"/g,
  )) {
    assert.equal(match[1], destination, `${route}: App Store destination`);
  }
  console.log(`PASS ${route}: HTTP 200, SEO and App Store links`);
}

for (const route of [
  "/download",
  "/download?url=https://example.com&next=https://example.com",
]) {
  for (const method of ["GET", "HEAD"]) {
    const response = await fetch(new URL(route, base), {
      method,
      redirect: "manual",
    });
    assert.equal(response.status, 307);
    assert.equal(response.headers.get("location"), destination);
    assert.equal(response.headers.get("cache-control"), "no-store");
  }
  console.log(`PASS ${route}: fixed 307 for GET and HEAD`);
}

const oldPrivacy = await fetch(new URL("/privacy-policy", base), {
  redirect: "manual",
});
assert.equal(oldPrivacy.status, 200);
assert.ok(
  (await oldPrivacy.text()).includes(
    'rel="canonical" href="https://chronicleatlas.app/privacy"',
  ),
);
for (const route of [
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.webmanifest",
  "/og.png",
]) {
  assert.equal((await fetch(new URL(route, base))).status, 200, route);
}

for (const directory of ["app-store", "v2"]) {
  for (const file of (await readdir(`public/screenshots/${directory}`)).filter(
    (name) => /^\d.*\.webp$/.test(name),
  )) {
    const imagePath = `/screenshots/${directory}/${file}`;
    const response = await fetch(new URL(imagePath, base));
    assert.equal(response.status, 200, imagePath);
    const metadata = await sharp(
      Buffer.from(await response.arrayBuffer()),
    ).metadata();
    assert.equal(metadata.width, 1320);
    assert.equal(metadata.height, 2868);
    const optimized = new URL("/_next/image", base);
    optimized.search = new URLSearchParams({
      url: imagePath,
      w: "750",
      q: "75",
    }).toString();
    const result = await fetch(optimized);
    assert.equal(result.status, 200, `${file}: responsive derivative`);
    const resized = await sharp(
      Buffer.from(await result.arrayBuffer()),
    ).metadata();
    assert.ok(Math.abs(resized.width / resized.height - 1320 / 2868) < 0.001);
    console.log(
      `PASS ${file}: full panel and responsive image, correct aspect ratio`,
    );
  }
}
for (const file of ["story-crown.webp", "story-alfred.webp"])
  assert.equal(
    (await fetch(new URL(`/screenshots/v2/${file}`, base))).status,
    200,
  );

// Prior screenshot URLs remain accessible; no broken historical image links.
for (const file of (await readdir("public/screenshots")).filter((name) =>
  name.endsWith(".png"),
)) {
  assert.equal(
    (await fetch(new URL(`/screenshots/${file}`, base))).status,
    200,
    file,
  );
}
console.log(
  "PASS metadata routes, legacy privacy alias and existing screenshot URLs",
);

for (const route of [
  "/brand/chronicle-atlas-logo.png",
  "/brand/chronicle-atlas-logo.webp",
  "/brand/chronicle-atlas-symbol.png",
  "/brand/england-871-app-icon.png",
  "/brand/england-871-app-icon.webp",
  "/england-871-app-icon.png",
  ...[16, 32, 180, 192, 512].map(
    (size) => `/brand/chronicle-atlas-icon-${size}.png`,
  ),
  "/icon.png",
  "/apple-icon.png",
]) {
  assert.equal((await fetch(new URL(route, base))).status, 200, route);
}
const manifest = await (
  await fetch(new URL("/manifest.webmanifest", base))
).json();
assert.deepEqual(
  manifest.icons.map((icon) => icon.src),
  [
    "/brand/chronicle-atlas-icon-192.png",
    "/brand/chronicle-atlas-icon-512.png",
  ],
);
console.log(
  "PASS uploaded brand asset URLs, favicon/touch icons, product schema and manifest",
);
