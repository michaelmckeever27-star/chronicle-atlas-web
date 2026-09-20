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

const panel = await sharp(path.join(root, "public/screenshots/app-store/01-medieval-england.webp"))
  .resize({ height: 1120 }).png().toBuffer();
const icon = await sharp(path.join(root, "public/england-871-app-icon.png"))
  .resize(116, 116).png().toBuffer();

await sharp({ create: { width: 2400, height: 1260, channels: 4, background: "#F2F4FA" } })
  .composite([
    { input: icon, left: 140, top: 140 },
    { input: await textLayer("England 871 · for iPhone", 44, "#19233D"), left: 290, top: 174 },
    { input: await textLayer("Medieval England.", 138, "#19233D", true), left: 140, top: 405 },
    { input: await textLayer("Made fascinating.", 138, "#3648DB", true), left: 140, top: 575 },
    { input: await textLayer("Stories, people, places and time.\nExplore England across 871–1399.", 48, "#526078"), left: 145, top: 810 },
    { input: await textLayer("Chronicle Atlas", 44, "#3648DB", true), left: 145, top: 1090 },
    { input: panel, left: 1730, top: 70 },
  ])
  .png().toFile(path.join(root, "public/og.png"));

console.log("Built the England 871 social preview with the shared fonts and supplied panel.");
