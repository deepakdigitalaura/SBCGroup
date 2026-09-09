<?php
// ponytail: single auto_prepend_file hook — avoids editing every exported page for
// SEO overrides, redirects, and business/site/header-footer settings.
$dataDir = __DIR__ . '/data';

$seo = is_file("$dataDir/seo.json") ? (json_decode(file_get_contents("$dataDir/seo.json"), true) ?: []) : [];
$settings = is_file("$dataDir/settings.json") ? (json_decode(file_get_contents("$dataDir/settings.json"), true) ?: []) : [];

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
$path = rtrim($path, '/');
if ($path === '') $path = '/';

// Redirects — checked before any output
foreach (($seo['redirects'] ?? []) as $r) {
    $from = rtrim($r['from'] ?? '', '/');
    if ($from === '') $from = '/';
    if ($from === $path) {
        header('Location: ' . $r['to'], true, (int)($r['type'] ?? 301));
        exit;
    }
}

$page = $seo['pages'][$path] ?? null;
$headTags = $seo['head_tags'] ?? '';
$business = $settings['business'] ?? [];
$site = $settings['site'] ?? [];
$headerFooter = $settings['header_footer'] ?? [];

// Original hardcoded values from the exported site — replaced with saved settings, if any
$replacements = array_filter([
    'consulting@sbcgroup.in' => $business['email'] ?? null,
    '+91 8128310116' => $business['phone'] ?? null,
    '918128310116' => $business['whatsapp'] ?? null,
    'Ahmedabad, Gujarat' => $business['address'] ?? null,
    'Sagar Burse Consulting' => $site['title'] ?? null,
    "A multi-division advisory firm contributing to India&#x27;s MSME ecosystem from Ahmedabad, Gujarat." => $site['tagline'] ?? null,
    'Book Free Audit' => $headerFooter['cta_label'] ?? null,
    '© 2026 Sagar Burse Consulting (SBC). All rights reserved.' => $headerFooter['copyright'] ?? null,
], fn($v) => $v !== null && $v !== '');

if (!$page && $headTags === '' && !$replacements) return; // nothing to inject

ob_start(function ($html) use ($page, $headTags, $replacements) {
    if ($replacements) {
        $html = strtr($html, $replacements);
    }
    if ($page['title'] ?? '') {
        $html = preg_replace('#<title>.*?</title>#s', '<title>' . htmlspecialchars($page['title']) . '</title>', $html, 1);
    }
    if ($page['description'] ?? '') {
        $desc = htmlspecialchars($page['description'], ENT_QUOTES);
        if (preg_match('#<meta name="description"[^>]*>#', $html)) {
            $html = preg_replace('#<meta name="description"[^>]*>#', '<meta name="description" content="' . $desc . '"/>', $html, 1);
        } else {
            $html = preg_replace('#</head>#', '<meta name="description" content="' . $desc . '"/></head>', $html, 1);
        }
    }
    $extra = '';
    if (!empty($page['noindex'])) $extra .= '<meta name="robots" content="noindex,follow"/>';
    if (!empty($page['canonical'])) $extra .= '<link rel="canonical" href="' . htmlspecialchars($page['canonical'], ENT_QUOTES) . '"/>';
    $extra .= $headTags;
    if ($extra !== '') $html = preg_replace('#</head>#', $extra . '</head>', $html, 1);
    return $html;
});
