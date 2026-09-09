<?php
require __DIR__ . '/auth.php';
admin_require_login();
require __DIR__ . '/_layout.php';

$defaults = [
    'copyright' => '© 2026 Sagar Burse Consulting (SBC). All rights reserved.',
    'cta_label' => 'Book Free Audit',
];
$settings = admin_read_json(SETTINGS_FILE);
$hf = array_merge($defaults, $settings['header_footer'] ?? []);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $hf = [
        'copyright' => trim($_POST['copyright'] ?? $defaults['copyright']),
        'cta_label' => trim($_POST['cta_label'] ?? $defaults['cta_label']),
    ];
    $settings['header_footer'] = $hf;
    admin_write_json(SETTINGS_FILE, $settings);
    $saved = true;
}

$admin_active = 'header-footer';
admin_head('Header & Footer');
?>
<h1 class="font-display text-2xl font-semibold tracking-tight text-ink">Header & Footer</h1>
<p class="mt-1 text-[14px] text-ink-soft">Nav "Book Free Audit" button label and footer copyright line, applied site-wide.</p>
<?php if (!empty($saved)): ?><p class="mt-3 text-[14px] font-medium sbc-text-success">Saved.</p><?php endif; ?>
<form method="post" class="mt-6 max-w-lg border border-ink-tint bg-card p-6 grid gap-5">
  <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">Header CTA Label</span>
    <input name="cta_label" value="<?= htmlspecialchars($hf['cta_label']) ?>" class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"/></label>
  <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">Footer Copyright Line</span>
    <input name="copyright" value="<?= htmlspecialchars($hf['copyright']) ?>" class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"/></label>
  <button type="submit" class="mt-2 bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint">Save</button>
</form>
<?php admin_foot(); ?>
