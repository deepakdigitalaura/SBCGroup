<?php
require __DIR__ . '/auth.php';
admin_require_login();
require __DIR__ . '/_layout.php';

$tab = $_GET['tab'] ?? 'defaults';
$seo = admin_read_json(SEO_FILE, ['site_url' => '', 'title_suffix' => '', 'meta_description' => '', 'pages' => [], 'redirects' => [], 'head_tags' => '']);
$saved = false;

// Root site pages we know about (clean-URL slugs), used by Pages tab + Sitemap
$sitePages = ['/', '/about-sbc', '/msme-consulting', '/institution-building-skill-development',
    '/strategic-research-feasibility', '/policy-advisory', '/gap360', '/case-studies', '/blog',
    '/resources', '/contact', '/book-free-audit', '/founder', '/our-approach', '/privacy-policy'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($tab === 'defaults') {
        $seo['site_url'] = trim($_POST['site_url'] ?? '');
        $seo['title_suffix'] = trim($_POST['title_suffix'] ?? '');
        $seo['meta_description'] = trim($_POST['meta_description'] ?? '');
    } elseif ($tab === 'pages') {
        $path = $_POST['path'] ?? '';
        if ($path !== '') {
            $seo['pages'][$path] = [
                'title' => trim($_POST['title'] ?? ''),
                'description' => trim($_POST['description'] ?? ''),
                'canonical' => trim($_POST['canonical'] ?? ''),
                'noindex' => isset($_POST['noindex']),
            ];
        }
    } elseif ($tab === 'redirects') {
        if (isset($_POST['add'])) {
            $seo['redirects'][] = ['from' => trim($_POST['from'] ?? ''), 'to' => trim($_POST['to'] ?? ''), 'type' => (int)($_POST['type'] ?? 301)];
        } elseif (isset($_POST['delete'])) {
            unset($seo['redirects'][(int)$_POST['delete']]);
            $seo['redirects'] = array_values($seo['redirects']);
        } elseif (isset($_POST['bulk_import'])) {
            // WordPress-migration helper: paste many "old-path -> new-path" lines at once
            // instead of the one-at-a-time form. Accepts "from,to[,type]" or "from -> to" per line.
            $added = 0;
            foreach (preg_split('/\r\n|\r|\n/', $_POST['bulk'] ?? '') as $line) {
                $line = trim($line);
                if ($line === '' || $line[0] === '#') continue;
                if (str_contains($line, '->')) {
                    [$from, $to] = array_map('trim', explode('->', $line, 2));
                    $type = 301;
                } else {
                    $parts = array_map('trim', explode(',', $line));
                    if (count($parts) < 2) continue;
                    [$from, $to] = $parts;
                    $type = isset($parts[2]) ? (int)$parts[2] : 301;
                }
                if ($from === '' || $to === '') continue;
                $seo['redirects'][] = ['from' => $from, 'to' => $to, 'type' => $type];
                $added++;
            }
            $bulkAdded = $added;
        } elseif (isset($_POST['clear_all'])) {
            $seo['redirects'] = [];
        }
    } elseif ($tab === '404log') {
        if (isset($_POST['clear_log'])) {
            @unlink(__DIR__ . '/../data/404-log.jsonl');
        }
    } elseif ($tab === 'robots') {
        file_put_contents(ROBOTS_FILE, $_POST['robots'] ?? '');
    } elseif ($tab === 'head') {
        $seo['head_tags'] = $_POST['head_tags'] ?? '';
    }
    if (!in_array($tab, ['robots', '404log'], true)) admin_write_json(SEO_FILE, $seo);
    $saved = true;
}

$admin_active = 'seo-' . $tab;
admin_head('SEO & Discovery');
?>
<h1 class="font-display text-2xl font-semibold tracking-tight text-ink">SEO & Discovery</h1>
<?php if ($saved): ?><p class="mt-3 text-[14px] font-medium sbc-text-success">Saved.</p><?php endif; ?>

<?php if ($tab === 'defaults'): ?>
  <form method="post" class="mt-6 max-w-lg border border-ink-tint bg-card p-6 grid gap-5">
    <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">Site URL</span>
      <input name="site_url" value="<?= htmlspecialchars($seo['site_url']) ?>" placeholder="https://sbcgroup.in" class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"/></label>
    <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">Default Title Suffix</span>
      <input name="title_suffix" value="<?= htmlspecialchars($seo['title_suffix']) ?>" placeholder=" | SBC" class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"/></label>
    <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">Default Meta Description</span>
      <textarea name="meta_description" rows="3" class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"><?= htmlspecialchars($seo['meta_description']) ?></textarea></label>
    <button type="submit" class="mt-2 bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint">Save</button>
  </form>

<?php elseif ($tab === 'pages'): ?>
  <div class="mt-6 grid gap-8 lg:grid-cols-2">
    <div class="border border-ink-tint bg-card p-6">
      <h2 class="font-display text-lg font-semibold text-ink">Per-Page Overrides</h2>
      <form method="post" class="mt-4 grid gap-4">
        <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">Page</span>
          <select name="path" class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none">
            <?php foreach ($sitePages as $p): ?><option value="<?= htmlspecialchars($p) ?>"><?= htmlspecialchars($p) ?></option><?php endforeach; ?>
          </select></label>
        <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">Title Override</span>
          <input name="title" class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"/></label>
        <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">Description Override</span>
          <textarea name="description" rows="2" class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"></textarea></label>
        <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">Canonical URL</span>
          <input name="canonical" class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"/></label>
        <label class="flex items-center gap-2 text-[14px] text-ink"><input type="checkbox" name="noindex"/> Noindex this page</label>
        <button type="submit" class="mt-2 bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint">Save Override</button>
      </form>
    </div>
    <div class="border border-ink-tint bg-card p-6">
      <h2 class="font-display text-lg font-semibold text-ink">Current Overrides</h2>
      <ul class="mt-4 space-y-2 text-[14px]">
        <?php if (!$seo['pages']): ?><li class="text-ink-soft">None yet.</li><?php endif; ?>
        <?php foreach ($seo['pages'] as $path => $p): ?>
          <li class="border-t border-ink-tint pt-3">
            <p class="font-medium text-ink"><?= htmlspecialchars($path) ?><?= !empty($p['noindex']) ? ' — noindex' : '' ?></p>
            <?php if (!empty($p['title'])): ?><p class="text-ink-soft">Title: <?= htmlspecialchars($p['title']) ?></p><?php endif; ?>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>

<?php elseif ($tab === 'redirects'): ?>
  <?php if (!empty($bulkAdded)): ?><p class="mt-1 text-[13px] font-medium sbc-text-success"><?= $bulkAdded ?> redirect(s) imported.</p><?php endif; ?>
  <div class="mt-4 grid gap-8 lg:grid-cols-2">
    <form method="post" class="border border-ink-tint bg-card p-6 grid gap-4">
      <h2 class="font-display text-lg font-semibold text-ink">Add Redirect</h2>
      <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">From (old WordPress path)</span>
        <input name="from" value="<?= htmlspecialchars($_GET['prefill'] ?? '') ?>" placeholder="/2023/old-post-slug/" required class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"/></label>
      <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">To (new path)</span>
        <input name="to" placeholder="/blog/new-post-slug" required class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"/></label>
      <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">Type</span>
        <select name="type" class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"><option value="301">301 Permanent (use for migration)</option><option value="302">302 Temporary</option></select></label>
      <button type="submit" name="add" value="1" class="mt-2 bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint">Add</button>
    </form>

    <form method="post" class="border border-ink-tint bg-card p-6 grid gap-4">
      <h2 class="font-display text-lg font-semibold text-ink">Bulk Import</h2>
      <p class="text-[13px] text-ink-soft">One redirect per line, from a spreadsheet export: <code>/old-path, /new-path, 301</code> or <code>/old-path -> /new-path</code> (defaults to 301). Lines starting with <code>#</code> are ignored.</p>
      <textarea name="bulk" rows="8" placeholder="/2023/old-post/, /blog/new-post, 301&#10;/old-service -> /msme-consulting" class="w-full border border-ink-tint bg-paper px-4 py-3 font-mono text-[13px] text-ink focus:border-gold focus:outline-none"></textarea>
      <button type="submit" name="bulk_import" value="1" class="bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint">Import Redirects</button>
    </form>
  </div>

  <div class="mt-8 border border-ink-tint bg-card p-6">
    <div class="flex items-center justify-between">
      <h2 class="font-display text-lg font-semibold text-ink">Active Redirects (<?= count($seo['redirects']) ?>)</h2>
      <?php if ($seo['redirects']): ?><form method="post" onsubmit="return confirm('Remove all redirects?')"><button type="submit" name="clear_all" value="1" class="text-[12px] font-semibold uppercase tracking-[0.1em] sbc-text-error hover:underline">Clear All</button></form><?php endif; ?>
    </div>
    <ul class="mt-4 space-y-2 text-[14px] overflow-y-auto" style="max-height:24rem">
      <?php if (!$seo['redirects']): ?><li class="text-ink-soft">None yet.</li><?php endif; ?>
      <?php foreach ($seo['redirects'] as $i => $r): ?>
        <li class="flex items-center justify-between gap-3 border-t border-ink-tint pt-2">
          <span class="min-w-0 truncate"><?= htmlspecialchars($r['from']) ?> → <?= htmlspecialchars($r['to']) ?> (<?= (int)$r['type'] ?>)</span>
          <form method="post"><button type="submit" name="delete" value="<?= $i ?>" class="shrink-0 text-[12px] font-semibold uppercase tracking-[0.1em] sbc-text-error hover:underline">Remove</button></form>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>

<?php elseif ($tab === '404log'):
    $logFile = __DIR__ . '/../data/404-log.jsonl';
    $hits = [];
    if (is_file($logFile)) {
        foreach (file($logFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
            $row = json_decode($line, true);
            if (!$row) continue;
            $p = $row['path'];
            $hits[$p] = ($hits[$p] ?? 0) + 1;
        }
        arsort($hits);
    }
    $redirectedFrom = array_column($seo['redirects'], 'from');
?>
  <p class="mt-1 text-[14px] text-ink-soft">Real visitor hits on missing URLs — the main tool for catching old WordPress links you haven't redirected yet. Add a redirect for anything important here, then it disappears from this list.</p>
  <div class="mt-6 border border-ink-tint bg-card p-6">
    <div class="flex items-center justify-between">
      <h2 class="font-display text-lg font-semibold text-ink"><?= count($hits) ?> distinct missing URLs</h2>
      <?php if ($hits): ?><form method="post" onsubmit="return confirm('Clear the 404 log?')"><button type="submit" name="clear_log" value="1" class="text-[12px] font-semibold uppercase tracking-[0.1em] sbc-text-error hover:underline">Clear Log</button></form><?php endif; ?>
    </div>
    <ul class="mt-4 divide-y divide-ink-tint text-[14px]">
      <?php if (!$hits): ?><li class="py-3 text-ink-soft">No 404s recorded yet.</li><?php endif; ?>
      <?php foreach ($hits as $path => $count):
        $already = in_array($path, $redirectedFrom, true);
      ?>
        <li class="flex items-center justify-between gap-3 py-3">
          <span class="min-w-0 truncate font-mono text-[13px] text-ink"><?= htmlspecialchars($path) ?></span>
          <span class="shrink-0 flex items-center gap-3">
            <span class="text-ink-soft"><?= $count ?> hit<?= $count === 1 ? '' : 's' ?></span>
            <?php if ($already): ?>
              <span class="sbc-text-success text-[12px] font-semibold uppercase tracking-[0.08em]">Redirected</span>
            <?php else: ?>
              <a href="/admin/seo.php?tab=redirects&prefill=<?= urlencode($path) ?>" class="text-[12px] font-semibold uppercase tracking-[0.08em] text-gold-deep hover:text-gold">Add Redirect →</a>
            <?php endif; ?>
          </span>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>

<?php elseif ($tab === 'sitemap'):
    $base = rtrim($seo['site_url'] ?: '', '/');
    $entries = array_values(array_diff($sitePages, array_keys(array_filter($seo['pages'], fn($p) => !empty($p['noindex'])))));
?>
  <div class="mt-6 border border-ink-tint bg-card p-6">
    <h2 class="font-display text-lg font-semibold text-ink">Sitemap Preview (<?= count($entries) ?> URLs)</h2>
    <p class="mt-1 text-[13px] text-ink-soft">Set the Site URL in SEO Defaults, then save <code>/sitemap.xml</code> below to publish it.</p>
    <form method="post" action="/admin/seo-sitemap-write.php" class="mt-4">
      <button type="submit" class="bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint">Regenerate sitemap.xml</button>
    </form>
    <ul class="mt-5 space-y-1 text-[13px] text-ink-soft">
      <?php foreach ($entries as $p): ?><li><?= htmlspecialchars($base . $p) ?></li><?php endforeach; ?>
    </ul>
  </div>

<?php elseif ($tab === 'robots'): ?>
  <form method="post" class="mt-6 max-w-2xl border border-ink-tint bg-card p-6">
    <h2 class="font-display text-lg font-semibold text-ink">robots.txt</h2>
    <textarea name="robots" rows="14" class="mt-4 w-full border border-ink-tint bg-paper px-4 py-3 font-mono text-[13px] text-ink focus:border-gold focus:outline-none"><?= htmlspecialchars(is_file(ROBOTS_FILE) ? file_get_contents(ROBOTS_FILE) : '') ?></textarea>
    <button type="submit" class="mt-4 bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint">Save robots.txt</button>
  </form>

<?php elseif ($tab === 'head'): ?>
  <form method="post" class="mt-6 max-w-2xl border border-ink-tint bg-card p-6">
    <h2 class="font-display text-lg font-semibold text-ink">Global Head Tags</h2>
    <p class="mt-1 text-[13px] text-ink-soft">Raw HTML injected before <code>&lt;/head&gt;</code> on every page — analytics, verification tags, etc.</p>
    <textarea name="head_tags" rows="10" class="mt-4 w-full border border-ink-tint bg-paper px-4 py-3 font-mono text-[13px] text-ink focus:border-gold focus:outline-none"><?= htmlspecialchars($seo['head_tags']) ?></textarea>
    <button type="submit" class="mt-4 bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint">Save</button>
  </form>
<?php endif; ?>

<?php admin_foot(); ?>
