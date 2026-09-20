import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const originals = path.join(root, "assets/brand/originals");
const brandDir = path.join(root, "public", "brand");
await mkdir(brandDir, { recursive: true });

// Deterministic crops/resizing only. Never redraw or remove the original alpha.
const companyUpload = path.join(originals, "chronicle-atlas-upload.png");
const appUpload = path.join(originals, "england-871-upload.jpeg");
const { data, info } = await sharp(companyUpload).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
assert.equal(info.width, 1942, "Review the crop if the company artwork changes");
assert.equal(info.height, 809);

function artworkBounds(rightLimit = info.width) {
  let left = rightLimit, top = info.height, right = 0, bottom = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < rightLimit; x++) {
      // Ignore near-invisible specks when measuring, NOT when processing pixels.
      // Extra margin retains the source's original soft edges.
      if (data[(y * info.width + x) * 4 + 3] > 16) {
        left = Math.min(left, x); top = Math.min(top, y);
        right = Math.max(right, x); bottom = Math.max(bottom, y);
      }
    }
  }
  return { left: left - 8, top: top - 8, width: right - left + 17, height: bottom - top + 17 };
}

const logoBounds = artworkBounds();
const logo = await sharp(companyUpload).extract(logoBounds).png().toBuffer();
await sharp(logo).png().toFile(path.join(brandDir, "chronicle-atlas-logo.png"));
await sharp(logo).resize({ width: 800, withoutEnlargement: true })
  .webp({ lossless: true }).toFile(path.join(brandDir, "chronicle-atlas-logo.webp"));

// x=660 lies in the transparent gap between the CA monogram and lettering.
const symbolBounds = artworkBounds(660);
const symbol = await sharp(companyUpload).extract(symbolBounds).png().toBuffer();
await sharp(symbol).png().toFile(path.join(brandDir, "chronicle-atlas-symbol.png"));
for (const size of [16, 32, 180, 192, 512]) {
  const padding = Math.max(1, Math.round(size * 0.07));
  const inset = size - padding * 2;
  // A light canvas keeps the original cobalt visible even in dark browser UI.
  const resized = await sharp(symbol).resize(inset, inset, { fit: "contain", background: "#ffffff" })
    .flatten({ background: "#ffffff" }).png().toBuffer();
  const icon = await sharp(resized).extend({ top: padding, bottom: padding, left: padding, right: padding, background: "#ffffff" })
    .png().toBuffer();
  await sharp(icon).toFile(path.join(brandDir, `chronicle-atlas-icon-${size}.png`));
  if (size === 512) await sharp(icon).toFile(path.join(root, "app/icon.png"));
  if (size === 180) await sharp(icon).toFile(path.join(root, "app/apple-icon.png"));
}

const appMetadata = await sharp(appUpload).metadata();
assert.equal(appMetadata.width, 707, "Review padding if the app artwork changes");
assert.equal(appMetadata.height, 699);
assert.equal(appMetadata.hasAlpha, false);
// Four copied edge rows above/below: no content crop, stretch or recolouring.
const squareApp = await sharp(appUpload).extend({ top: 4, bottom: 4, left: 0, right: 0, extendWith: "copy" }).png().toBuffer();
await sharp(squareApp).resize(512, 512).png().toFile(path.join(brandDir, "england-871-app-icon.png"));
await sharp(squareApp).resize(256, 256).webp({ lossless: true }).toFile(path.join(brandDir, "england-871-app-icon.webp"));
// Keep the older public URL working, serving the supplied artwork there too.
await sharp(squareApp).resize(512, 512).png().toFile(path.join(root, "public/england-871-app-icon.png"));

await import("./build-social-preview.mjs");

console.log("Built uploaded company/app artwork, CA favicons, touch icon and social preview.");
console.log({ logoBounds, symbolBounds });
