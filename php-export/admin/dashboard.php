<?php
require __DIR__ . '/auth.php';
admin_require_login();
require __DIR__ . '/_layout.php';

$leads = admin_read_submissions('audit');
$inquiries = admin_read_submissions('contact');
$admin_active = 'dashboard';
admin_head('Overview');
?>
<h1 class="font-display text-2xl font-semibold tracking-tight text-ink">Overview</h1>
<div class="mt-8 grid gap-5 sm:grid-cols-3">
  <a href="/admin/submissions.php?type=audit" class="block border border-ink-tint bg-card p-6 hover:border-gold">
    <p class="text-3xl font-semibold text-ink"><?= count($leads) ?></p>
    <p class="mt-2 text-[12px] uppercase tracking-[0.14em] text-ink-soft">Audit Leads</p>
  </a>
  <a href="/admin/submissions.php?type=contact" class="block border border-ink-tint bg-card p-6 hover:border-gold">
    <p class="text-3xl font-semibold text-ink"><?= count($inquiries) ?></p>
    <p class="mt-2 text-[12px] uppercase tracking-[0.14em] text-ink-soft">Contact Inquiries</p>
  </a>
  <a href="/admin/submissions.php?type=all" class="block border border-ink-tint bg-card p-6 hover:border-gold">
    <p class="text-3xl font-semibold text-ink"><?= count($leads) + count($inquiries) ?></p>
    <p class="mt-2 text-[12px] uppercase tracking-[0.14em] text-ink-soft">Total Submissions</p>
  </a>
</div>
<p class="mt-8 text-[14px] text-ink-soft">Use the sidebar to review Submissions, manage business/site details, and configure SEO.</p>
<?php admin_foot(); ?>
