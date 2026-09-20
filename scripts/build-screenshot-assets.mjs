import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Keep complete panels: headlines, phone frames and app UI. Originals stay intact.
const directory = path.join(process.cwd(), "public/screenshots/app-store");
for (const file of (await readdir(path.join(directory, "originals"))).filter((name) => name.endsWith(".png"))) {
  const source = path.join(directory, "originals", file);
  const target = path.join(directory, file.replace(/\.png$/, ".webp").toLowerCase());
  const metadata = await sharp(source).metadata();
  if (metadata.width !== 1320 || metadata.height !== 2868) {
    throw new Error(`Unexpected panel dimensions: ${file}`);
  }
  await sharp(source).webp({ quality: 90, effort: 6 }).toFile(target);
  console.log(`${file}: ${(await stat(source)).size} → ${(await stat(target)).size} bytes`);
}
