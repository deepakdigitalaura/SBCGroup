<?php
// ponytail: one shared chrome file instead of copy-pasting the sidebar into every admin page
function admin_nav_items(): array
{
    return [
        ['label' => 'Overview', 'href' => '/admin/dashboard.php', 'key' => 'dashboard'],
        ['label' => 'Submissions', 'href' => '/admin/submissions.php', 'key' => 'submissions'],
        ['label' => 'Business', 'href' => '/admin/business.php', 'key' => 'business'],
        ['label' => 'Site Settings', 'href' => '/admin/site-settings.php', 'key' => 'site-settings'],
        ['label' => 'Header & Footer', 'href' => '/admin/header-footer.php', 'key' => 'header-footer'],
        ['group' => 'SEO & Discovery', 'items' => [
            ['label' => 'SEO Defaults', 'href' => '/admin/seo.php?tab=defaults', 'key' => 'seo-defaults'],
            ['label' => 'Pages', 'href' => '/admin/seo.php?tab=pages', 'key' => 'seo-pages'],
            ['label' => 'Redirects', 'href' => '/admin/seo.php?tab=redirects', 'key' => 'seo-redirects'],
            ['label' => '404 Log', 'href' => '/admin/seo.php?tab=404log', 'key' => 'seo-404log'],
            ['label' => 'Sitemap', 'href' => '/admin/seo.php?tab=sitemap', 'key' => 'seo-sitemap'],
            ['label' => 'Robots.txt', 'href' => '/admin/seo.php?tab=robots', 'key' => 'seo-robots'],
            ['label' => 'Head Tags', 'href' => '/admin/seo.php?tab=head', 'key' => 'seo-head'],
        ]],
        ['group' => 'Content', 'items' => [
            ['label' => 'Testimonials', 'href' => '/admin/testimonials.php', 'key' => 'testimonials'],
        ]],
    ];
}

function admin_head(string $title): void
{
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charSet="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="/assets/styles-BrIx1YJE.css"/>
<link rel="stylesheet" href="/assets/sbc-extra.css"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;700;900&display=swap"/>
<link rel="icon" type="image/png" href="/favicon.png"/>
<title><?= htmlspecialchars($title) ?> | SBC Admin</title>
<style>
/* ponytail: hand-written CSS for the admin chrome — the site's compiled Tailwind
   bundle only contains utility classes actually used in the 24 exported pages, so
   arbitrary new class names here (size-10, gap-3+border-white/10 combos, etc.)
   silently do nothing. Explicit rules avoid depending on what happened to survive purge. */
:root{--admin-sidebar-w:252px}
*{box-sizing:border-box}
html,body{margin:0;height:100%}
body{background:var(--paper,#faf8f3)}
.admin-shell{display:flex;height:100vh;overflow:hidden}
.admin-sidebar{width:var(--admin-sidebar-w);flex:0 0 auto;height:100vh;background:var(--ink,#151515);color:#fff;display:flex;flex-direction:column}
.admin-sidebar-brand{display:flex;align-items:center;gap:12px;padding:22px 20px;border-bottom:1px solid rgba(255,255,255,.1);flex:0 0 auto}
.admin-sidebar-brand img{width:40px;height:40px;border-radius:999px;object-fit:cover;flex:0 0 auto}
.admin-sidebar-brand span{font-size:15px;font-weight:700;line-height:1.2;letter-spacing:.01em}
.admin-nav{padding:14px 10px;flex:1;overflow-y:auto;min-height:0}
.admin-nav-link{display:block;padding:9px 12px;margin:1px 0;font-size:13px;font-weight:600;color:rgba(255,255,255,.72);border-radius:5px;text-decoration:none;letter-spacing:.01em}
.admin-nav-link:hover{color:#fff;background:rgba(255,255,255,.07)}
.admin-nav-link.active{color:var(--ink,#151515);background:var(--gold,#C9A227);font-weight:700}
.admin-nav-group{margin:18px 0 4px;padding:0 12px;font-size:10.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.38)}
.admin-nav-group:first-child{margin-top:2px}
.admin-sidebar-foot{padding:14px 10px;border-top:1px solid rgba(255,255,255,.1);flex:0 0 auto}
.admin-main{flex:1;min-width:0;height:100vh;overflow-y:auto}
</style>
</head>
<body>
<div class="admin-shell">
<aside class="admin-sidebar">
  <div class="admin-sidebar-brand">
    <img src="/sbc-logo.png" alt="SBC"/>
    <span>SBC Admin</span>
  </div>
  <nav class="admin-nav">
<?php
    $active = $GLOBALS['admin_active'] ?? '';
    foreach (admin_nav_items() as $item) {
        if (isset($item['group'])) {
            echo '<p class="admin-nav-group">' . htmlspecialchars($item['group']) . '</p>';
            foreach ($item['items'] as $sub) {
                $cls = 'admin-nav-link' . ($active === $sub['key'] ? ' active' : '');
                echo '<a class="' . $cls . '" href="' . $sub['href'] . '">' . htmlspecialchars($sub['label']) . '</a>';
            }
        } else {
            $cls = 'admin-nav-link' . ($active === $item['key'] ? ' active' : '');
            echo '<a class="' . $cls . '" href="' . $item['href'] . '">' . htmlspecialchars($item['label']) . '</a>';
        }
    }
?>
  </nav>
  <div class="admin-sidebar-foot">
    <a class="admin-nav-link" href="/admin/logout.php">Log Out</a>
  </div>
</aside>
<main class="admin-main">
<div class="shell section-y">
<?php
}

function admin_foot(): void
{
?>
</div>
</main>
</div>
</body>
</html>
<?php
}
