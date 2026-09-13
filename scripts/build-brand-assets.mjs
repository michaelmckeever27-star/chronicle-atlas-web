import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const geometry = JSON.parse(
  await readFile(path.join(root, "lib", "atlas-seal.json"), "utf8"),
);
const brandDir = path.join(root, "public", "brand");
await mkdir(brandDir, { recursive: true });

const symbolMarkup = (colour) => `
  <path d="${geometry.ring}" fill="none" stroke="${colour}" stroke-width="8" stroke-linecap="butt"/>
  <path d="${geometry.star}" fill="${colour}"/>
  ${geometry.panels.map((d) => `<path d="${d}" fill="${colour}"/>`).join("\n  ")}`;

const symbolSvg = (colour) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${geometry.viewBox}">${symbolMarkup(colour)}</svg>`;

const logoSvg = ({ mark, wordmark, monochrome = false }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 120" role="img" aria-label="Chronicle Atlas">
  <g transform="translate(0 0)">${symbolMarkup(mark)}</g>
  <text x="136" y="79" fill="${monochrome ? mark : wordmark}" font-family="Source Serif 4, Georgia, serif" font-size="61" font-weight="600" letter-spacing="-1.2">Chronicle Atlas</text>
</svg>`;

const assets = {
  "atlas-seal-master.svg": symbolSvg("#000000"),
  "atlas-seal-symbol-blue.svg": symbolSvg("#3046C5"),
  "atlas-seal-symbol-gold.svg": symbolSvg("#F6C453"),
  "atlas-seal-primary.svg": logoSvg({ mark: "#F6C453", wordmark: "#FFF8E7" }),
  "atlas-seal-light.svg": logoSvg({ mark: "#3046C5", wordmark: "#3046C5" }),
  "atlas-seal-monochrome.svg": logoSvg({ mark: "#17223E", wordmark: "#17223E", monochrome: true }),
};

for (const [name, svg] of Object.entries(assets)) {
  await writeFile(path.join(brandDir, name), svg);
}

const iconSvg = (size) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 120 120">
  <rect width="120" height="120" rx="25" fill="#3046C5"/>
  <g transform="translate(7 7) scale(.88)">${symbolMarkup("#F6C453")}</g>
</svg>`);

await sharp(Buffer.from(symbolSvg("#F6C453"))).resize(1024, 1024).png().toFile(path.join(brandDir, "atlas-seal-gold.png"));
await sharp(iconSvg(1024)).resize(1024, 1024).png().toFile(path.join(brandDir, "atlas-seal-icon.png"));
await sharp(iconSvg(32)).resize(32, 32).png().toFile(path.join(brandDir, "atlas-seal-icon-32.png"));
await sharp(iconSvg(16)).resize(16, 16).png().toFile(path.join(brandDir, "atlas-seal-icon-16.png"));
await sharp(iconSvg(512)).resize(512, 512).png().toFile(path.join(root, "app", "icon.png"));
await sharp(iconSvg(180)).resize(180, 180).png().toFile(path.join(root, "app", "apple-icon.png"));

const ogSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="2400" height="1260" viewBox="0 0 2400 1260">
  <rect width="2400" height="1260" fill="#3046C5"/>
  <g opacity=".16" fill="none" stroke="#FFF8E7" stroke-width="3">
    <circle cx="2075" cy="170" r="520"/><circle cx="2075" cy="170" r="690"/><path d="M1460 1030C1670 850 1780 610 1830 310"/>
  </g>
  <g transform="translate(135 116) scale(2.15)">${symbolMarkup("#F6C453")}</g>
  <text x="430" y="292" fill="#FFF8E7" font-family="Georgia, serif" font-size="124" font-weight="700">Chronicle Atlas</text>
  <text x="140" y="645" fill="#FFF8E7" font-family="Georgia, serif" font-size="158" font-weight="700">Step inside</text>
  <text x="140" y="815" fill="#FFF8E7" font-family="Georgia, serif" font-size="158" font-weight="700">medieval England.</text>
  <text x="144" y="988" fill="#FFF8E7" font-family="Arial, sans-serif" font-size="58">People, places and stories · England 871 · 871–1399</text>
  <rect x="140" y="1075" width="560" height="8" fill="#F6C453"/>
</svg>`);
await sharp(ogSvg).png().toFile(path.join(root, "public", "og.png"));

console.log("Built Atlas Seal SVG, PNG, favicon, touch icon and social assets.");
