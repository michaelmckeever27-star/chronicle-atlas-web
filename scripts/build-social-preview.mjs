import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const headingFont = path.join(root, "public/fonts/fredoka/fredoka-medium.ttf");
const bodyFont = path.join(root, "public/fonts/nunito-sans/nunito-sans-regular.ttf");
const textLayer = async (text, size, colour, heading = false) => sharp({
  text: {
    text: `<span foreground="${colour}">${text}</span>`,
    font: `${heading ? "Fredoka Medium" : "Nunito Sans"} ${size}`,
    fontfile: heading ? headingFont : bodyFont,
    rgba: true,
    dpi: 72,
  },
}).png().toBuffer();

const panel = await sharp(path.join(root, "public/screenshots/v2/01-daily-history.webp"))
  .resize({ height: 1120 }).png().toBuffer();
const icon = await sharp(path.join(root, "public/brand/england-871-app-icon.png"))
  .resize(116, 116).png().toBuffer();
const companyLogo = await sharp(path.join(root, "public/brand/chronicle-atlas-logo.png"))
  .resize({ width: 390 }).png().toBuffer();

await sharp({ create: { width: 2400, height: 1260, channels: 4, background: "#F3F4FB" } })
  .composite([
    { input: icon, left: 140, top: 140 },
    { input: await textLayer("England 871 · for iPhone", 44, "#19233D"), left: 290, top: 174 },
    { input: await textLayer("A little history.", 138, "#1B2540", true), left: 140, top: 405 },
    { input: await textLayer("Every day.", 138, "#3844E7", true), left: 140, top: 575 },
    { input: await textLayer("Read. Listen. Explore.\nFrom Alfred to Bosworth · 871–1485.", 48, "#53627E"), left: 145, top: 810 },
    { input: companyLogo, left: 145, top: 1030 },
    { input: panel, left: 1730, top: 70 },
  ])
  .png().toFile(path.join(root, "public/og.png"));

console.log("Built the England 871 social preview with the shared fonts and supplied panel.");
