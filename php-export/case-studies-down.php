<?php
// Case-studies section taken temporarily offline (2026-09-30).
// Reversible: delete this file and remove the "case-studies" block near the
// top of .htaccess to restore full access — no content was deleted anywhere.
http_response_code(503);
header('Retry-After: 2592000'); // ~30 days — tells Google/browsers "temporary", not gone
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="/assets/styles-p1oH2nuP.css"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;700;900&display=swap"/>
<link rel="icon" type="image/png" href="/favicon.png"/>
<title>Case Studies | Temporarily Unavailable | SBC</title>
</head>
<body class="bg-paper">
<div class="min-h-screen flex items-center justify-center text-center px-6">
  <div>
    <p class="font-display text-5xl font-semibold text-gold">&#9203;</p>
    <h1 class="mt-4 font-display text-2xl font-semibold text-ink">Case Studies — Temporarily Unavailable</h1>
    <p class="mt-2 text-[16px] text-charcoal">We're updating this section. Please check back soon.</p>
    <a href="/" class="mt-6 inline-flex items-center gap-2 bg-gold px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-paper hover:bg-gold-tint">Back to Home</a>
  </div>
</div>
</body>
</html>
