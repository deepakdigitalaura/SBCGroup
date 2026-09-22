<?php
// Reached for any URL that isn't a real file/page. seo-inject.php (auto_prepend_file)
// runs before this and 301/302-redirects first if the path matches a configured redirect —
// this only renders when there's no redirect and the page genuinely doesn't exist.
http_response_code(404);

// Log misses during the WordPress-to-PHP migration so old URLs that still get traffic
// but have no redirect set up yet show up in Admin > SEO > 404 Log instead of vanishing silently.
$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
$logFile = __DIR__ . '/data/404-log.jsonl';
if (!is_dir(__DIR__ . '/data')) @mkdir(__DIR__ . '/data', 0755, true);
@file_put_contents($logFile, json_encode([
    'path' => $path,
    'referrer' => $_SERVER['HTTP_REFERER'] ?? '',
    'time' => date('c'),
]) . "\n", FILE_APPEND | LOCK_EX);
// ponytail: cheap cap so crawler noise can't grow this file unbounded — keeps the newest 3000 lines
if (@filesize($logFile) > 800000) {
    $lines = file($logFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    @file_put_contents($logFile, implode("\n", array_slice($lines, -3000)) . "\n", LOCK_EX);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="/assets/styles-p1oH2nuP.css"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;700;900&display=swap"/>
<link rel="icon" type="image/png" href="/favicon.png"/>
<title>Page Not Found | SBC</title>
</head>
<body class="bg-paper">
<div class="min-h-screen flex items-center justify-center text-center px-6">
  <div>
    <p class="font-display text-5xl font-semibold text-gold">404</p>
    <h1 class="mt-4 font-display text-2xl font-semibold text-ink">Page not found</h1>
    <p class="mt-2 text-[16px] text-charcoal">The page you're looking for doesn't exist or has moved.</p>
    <a href="/" class="mt-6 inline-flex items-center gap-2 bg-gold px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-paper hover:bg-gold-tint">Back to Home</a>
  </div>
</div>
</body>
</html>
