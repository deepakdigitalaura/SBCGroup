<?php
require __DIR__ . '/auth.php';
admin_require_login();

$seo = admin_read_json(SEO_FILE, ['site_url' => '', 'pages' => []]);
$base = rtrim($seo['site_url'] ?: '', '/');

$sitePages = ['/', '/about-sbc', '/msme-consulting', '/institution-building-skill-development',
    '/strategic-research-feasibility', '/policy-advisory', '/gap360', '/case-studies', '/blog',
    '/resources', '/contact', '/book-free-audit', '/founder', '/our-approach', '/privacy-policy',
    '/case-studies/rubber-plastics-manufacturer', '/case-studies/industrial-components-manufacturer',
    '/case-studies/trading-distribution-business', '/case-studies/winntus-institute-formwork-technology',
    '/case-studies/finance-operations-services-venture', '/case-studies/specialty-cafe-green-coffee-venture',
    '/blog/5-business-systems-msme-scaling', '/blog/why-msmes-stay-stuck-systems-gap'];

$noindex = array_keys(array_filter($seo['pages'] ?? [], fn($p) => !empty($p['noindex'])));
$entries = array_diff($sitePages, $noindex);

$xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n" . '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
foreach ($entries as $p) {
    $xml .= '  <url><loc>' . htmlspecialchars($base . $p, ENT_XML1) . '</loc></url>' . "\n";
}
$xml .= '</urlset>';

file_put_contents(__DIR__ . '/../sitemap.xml', $xml);
header('Location: /admin/seo.php?tab=sitemap');
