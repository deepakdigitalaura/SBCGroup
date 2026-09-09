<?php
require __DIR__ . '/auth.php';
admin_require_login();
require __DIR__ . '/_layout.php';

$defaults = [
    'title' => 'Sagar Burse Consulting',
    'tagline' => "A multi-division advisory firm contributing to India's MSME ecosystem from Ahmedabad, Gujarat.",
];
$settings = admin_read_json(SETTINGS_FILE);
$site = array_merge($defaults, $settings['site'] ?? []);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $site = [
        'title' => trim($_POST['title'] ?? $defaults['title']),
        'tagline' => trim($_POST['tagline'] ?? $defaults['tagline']),
    ];
    $settings['site'] = $site;
    admin_write_json(SETTINGS_FILE, $settings);
    $saved = true;
}

$admin_active = 'site-settings';
admin_head('Site Settings');
?>
<h1 class="font-display text-2xl font-semibold tracking-tight text-ink">Site Settings</h1>
<p class="mt-1 text-[14px] text-ink-soft">Business name and tagline shown across the site footer.</p>
<?php if (!empty($saved)): ?><p class="mt-3 text-[14px] font-medium sbc-text-success">Saved.</p><?php endif; ?>
<form method="post" class="mt-6 max-w-lg border border-ink-tint bg-card p-6 grid gap-5">
  <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">Business Name</span>
    <input name="title" value="<?= htmlspecialchars($site['title']) ?>" class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"/></label>
  <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">Tagline</span>
    <textarea name="tagline" rows="3" class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"><?= htmlspecialchars($site['tagline']) ?></textarea></label>
  <button type="submit" class="mt-2 bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint">Save</button>
</form>
<?php admin_foot(); ?>
