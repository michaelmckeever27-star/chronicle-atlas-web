import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const directory = path.join(process.cwd(), "public/screenshots/v2");
for (const file of (await readdir(path.join(directory, "originals"))).filter(
  (name) => name.endsWith(".png"),
)) {
  const source = path.join(directory, "originals", file);
  const metadata = await sharp(source).metadata();
  if (metadata.width !== 1320 || metadata.height !== 2868)
    throw new Error(`Unexpected dimensions: ${file}`);
  const target = path.join(directory, file.replace(/\.png$/, ".webp"));
  await sharp(source).webp({ quality: 90, effort: 6 }).toFile(target);
  console.log(
    `${file}: ${(await stat(target)).size} bytes; full composition retained`,
  );
}

// Exact excerpts of supplied in-app artwork, not new or substituted illustrations.
await sharp(path.join(directory, "originals/02-read-and-listen.png"))
  .extract({ left: 244, top: 1084, width: 833, height: 442 })
  .resize({ width: 720 })
  .webp({ quality: 92 })
  .toFile(path.join(directory, "story-crown.webp"));
await sharp(path.join(directory, "originals/03-stories.png"))
  .extract({ left: 254, top: 1728, width: 168, height: 183 })
  .webp({ quality: 95 })
  .toFile(path.join(directory, "story-alfred.webp"));
