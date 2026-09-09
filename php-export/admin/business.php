<?php
require __DIR__ . '/auth.php';
admin_require_login();
require __DIR__ . '/_layout.php';

$defaults = [
    'email' => 'consulting@sbcgroup.in',
    'phone' => '+91 8128310116',
    'whatsapp' => '918128310116',
    'address' => 'Ahmedabad, Gujarat',
];
$settings = admin_read_json(SETTINGS_FILE);
$business = array_merge($defaults, $settings['business'] ?? []);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $business = [
        'email' => trim($_POST['email'] ?? $defaults['email']),
        'phone' => trim($_POST['phone'] ?? $defaults['phone']),
        'whatsapp' => trim($_POST['whatsapp'] ?? $defaults['whatsapp']),
        'address' => trim($_POST['address'] ?? $defaults['address']),
    ];
    $settings['business'] = $business;
    admin_write_json(SETTINGS_FILE, $settings);
    $saved = true;
}

$admin_active = 'business';
admin_head('Business');
?>
<h1 class="font-display text-2xl font-semibold tracking-tight text-ink">Business Details</h1>
<p class="mt-1 text-[14px] text-ink-soft">These values replace the site's contact details across all pages (header/footer/contact info).</p>
<?php if (!empty($saved)): ?><p class="mt-3 text-[14px] font-medium sbc-text-success">Saved.</p><?php endif; ?>
<form method="post" class="mt-6 max-w-lg border border-ink-tint bg-card p-6 grid gap-5">
  <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">Email</span>
    <input name="email" value="<?= htmlspecialchars($business['email']) ?>" class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"/></label>
  <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">Phone (display, e.g. +91 8128310116)</span>
    <input name="phone" value="<?= htmlspecialchars($business['phone']) ?>" class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"/></label>
  <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">WhatsApp number (digits only, e.g. 918128310116)</span>
    <input name="whatsapp" value="<?= htmlspecialchars($business['whatsapp']) ?>" class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"/></label>
  <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">Address</span>
    <input name="address" value="<?= htmlspecialchars($business['address']) ?>" class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"/></label>
  <button type="submit" class="mt-2 bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint">Save</button>
</form>
<?php admin_foot(); ?>
