import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import sharp from "sharp";

const originals = "assets/brand/originals/";
for (const [file, expected] of [
  ["chronicle-atlas-upload.png", "aa50e45e81119f41829bfcb6a47ca1b5fba03bc6e2f1dacb9ffdf1c6a34c1985"],
  ["england-871-upload.jpeg", "bdeec345368f6567f85a5b139b996462479c1042fc6d0899dc53be5d60fa8c8e"],
]) {
  assert.equal(createHash("sha256").update(await readFile(originals + file)).digest("hex"), expected, `${file}: unmodified upload`);
}
for (const [file, bounds] of [
  ["chronicle-atlas-logo.png", { left: 190, top: 170, width: 1562, height: 450 }],
  ["chronicle-atlas-symbol.png", { left: 190, top: 170, width: 457, height: 448 }],
]) {
  const expected = await sharp(originals + "chronicle-atlas-upload.png").extract(bounds).raw().toBuffer();
  const actual = await sharp("public/brand/" + file).raw().toBuffer();
  assert.ok(actual.equals(expected), `${file}: source pixels and alpha are unchanged`);
}
for (const size of [16, 32, 180, 192, 512]) {
  const file = `public/brand/chronicle-atlas-icon-${size}.png`;
  const metadata = await sharp(file).metadata();
  assert.equal(metadata.width, size);
  assert.equal(metadata.height, size);
  assert.equal((await sharp(file).stats()).isOpaque, true, `${size}px: light canvas`);
}
assert.ok((await readFile("app/icon.png")).equals(await readFile("public/brand/chronicle-atlas-icon-512.png")));
assert.ok((await readFile("app/apple-icon.png")).equals(await readFile("public/brand/chronicle-atlas-icon-180.png")));
const logo = await sharp("public/brand/chronicle-atlas-logo.webp").metadata();
assert.equal(logo.hasAlpha, true);
assert.equal(logo.width, 800);
assert.ok(Math.abs(logo.width / logo.height - 1562 / 450) < 0.01);
const expectedApp = await sharp(originals + "england-871-upload.jpeg")
  .extend({ top: 4, bottom: 4, left: 0, right: 0, extendWith: "copy" }).png().toBuffer();
const appPixels = await sharp(expectedApp).resize(512, 512).raw().toBuffer();
assert.ok(appPixels.equals(await sharp("public/brand/england-871-app-icon.png").raw().toBuffer()));
assert.ok((await readFile("public/england-871-app-icon.png")).equals(await readFile("public/brand/england-871-app-icon.png")));
console.log("PASS original upload hashes, exact company crops/alpha, app padding, favicon sizes and compatibility icon");
