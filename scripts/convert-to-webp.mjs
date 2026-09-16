/**
 * convert-to-webp.mjs
 * Pre-converts PNG/JPEG image assets to WebP using the `sharp` library.
 * Run once: node scripts/convert-to-webp.mjs
 *
 * For each source image it creates a sibling .webp file at quality 82.
 * Original files are preserved so nothing breaks if WebP is unavailable.
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_ROOT = join(__dirname, '..', 'public', 'assets', 'images');
const QUALITY = 82;

/** Recursively collect all .png / .jpg / .jpeg files */
async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectImages(full)));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        files.push(full);
      }
    }
  }
  return files;
}

async function main() {
  const images = await collectImages(ASSETS_ROOT);
  console.log(`Found ${images.length} image(s) to convert.\n`);

  let converted = 0;
  let skipped = 0;

  for (const src of images) {
    const webpPath = src.replace(/\.(png|jpe?g)$/i, '.webp');

    // Skip if .webp already exists and is newer than the source
    try {
      const [srcStat, webpStat] = await Promise.all([stat(src), stat(webpPath)]);
      if (webpStat.mtimeMs >= srcStat.mtimeMs) {
        console.log(`  SKIP  ${basename(src)}  (WebP up to date)`);
        skipped++;
        continue;
      }
    } catch {
      // webpPath doesn't exist yet — proceed with conversion
    }

    try {
      await sharp(src).webp({ quality: QUALITY }).toFile(webpPath);
      const srcKb = Math.round((await stat(src)).size / 1024);
      const webpKb = Math.round((await stat(webpPath)).size / 1024);
      const saving = Math.round(((srcKb - webpKb) / srcKb) * 100);
      console.log(`  OK    ${basename(src)}  ${srcKb}KB → ${webpKb}KB  (${saving}% smaller)`);
      converted++;
    } catch (err) {
      console.error(`  ERR   ${basename(src)}  ${err.message}`);
    }
  }

  console.log(`\nDone. Converted: ${converted}, Skipped: ${skipped}`);
}

main().catch(console.error);
