// ponytail: adds only the still-missing og:image/og:site_name/twitter:image/title/description
// tags after each route's existing twitter:card meta entry. Canonical + og:title/description
// already exist per-route from the SEO PR — this doesn't touch those.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const OG_IMAGE = "https://sbcgroup.in/sbc-logo.png";
const SITE_NAME = "Sagar Burse Consulting (SBC)";

const dir = "src/routes";
let changed = [];

for (const file of readdirSync(dir)) {
  if (!file.endsWith(".tsx")) continue;
  const full = `${dir}/${file}`;
  let c = readFileSync(full, "utf8");
  if (!c.includes('name: "twitter:card"')) continue;
  if (c.includes('property: "og:image"')) continue; // already patched

  const anchor = /(\s*)\{ name: "twitter:card", content: "summary_large_image" \},/;
  const m = c.match(anchor);
  if (!m) {
    console.warn(`skip ${file}: anchor not found`);
    continue;
  }
  const indent = m[1];
  const extra =
    `${indent}{ property: "og:image", content: "${OG_IMAGE}" },` +
    `${indent}{ property: "og:site_name", content: "${SITE_NAME}" },` +
    `${indent}{ name: "twitter:title", content: title },` +
    `${indent}{ name: "twitter:description", content: description },` +
    `${indent}{ name: "twitter:image", content: "${OG_IMAGE}" },`;

  c = c.replace(anchor, m[0] + extra);
  writeFileSync(full, c);
  changed.push(file);
}

console.log(changed);
