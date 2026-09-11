// ponytail: adds og:image/og:url/og:site_name/twitter:image/title/description to already-exported
// php files, in place. Reuses each file's own <title>/<meta description>/canonical href — no
// full re-export needed. Re-run after re-exporting to reapply.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const OG_IMAGE = "https://sbcgroup.in/sbc-logo.png";
const SITE_NAME = "Sagar Burse Consulting (SBC)";

const dir = "php-export";
let patched = 0;

for (const file of readdirSync(dir)) {
  if (!file.endsWith(".php")) continue;
  const full = `${dir}/${file}`;
  let html = readFileSync(full, "utf8");

  if (!html.includes('name="twitter:card"')) continue; // not a rendered page
  if (html.includes('property="og:image"')) continue; // already patched

  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  const descMatch = html.match(/name="description" content="(.*?)"\/>/);
  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (!titleMatch) {
    console.warn(`skip ${file}: no <title> found`);
    continue;
  }

  const title = titleMatch[1];
  const description = descMatch ? descMatch[1] : "";
  const url = canonicalMatch ? canonicalMatch[1] : "https://sbcgroup.in/";

  const extraTags =
    `<meta property="og:url" content="${url}"/>` +
    `<meta property="og:image" content="${OG_IMAGE}"/>` +
    `<meta property="og:site_name" content="${SITE_NAME}"/>` +
    `<meta name="twitter:title" content="${title}"/>` +
    (description ? `<meta name="twitter:description" content="${description}"/>` : "") +
    `<meta name="twitter:image" content="${OG_IMAGE}"/>`;

  const anchor = '<meta name="twitter:card" content="summary_large_image"/>';
  if (!html.includes(anchor)) {
    console.warn(`skip ${file}: no twitter:card anchor found`);
    continue;
  }
  html = html.replace(anchor, anchor + extraTags);

  writeFileSync(full, html);
  patched++;
}

console.log(`patched ${patched} files`);
