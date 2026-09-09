<?php
require __DIR__ . '/auth.php';
admin_require_login();
require __DIR__ . '/_layout.php';
require __DIR__ . '/_submissions-table.php';

// "Leads" = Book Free Audit form, "Inquiries" = Contact page form — same lead pipeline,
// just tagged by which form they came from. One list with a filter instead of two pages.
$filter = $_GET['type'] ?? 'all';
$all = admin_read_submissions();
$rows = $filter === 'all' ? $all : array_filter($all, fn($r) => ($r['type'] ?? 'audit') === $filter);

$admin_active = 'submissions';
admin_head('Submissions');
?>
<h1 class="font-display text-2xl font-semibold tracking-tight text-ink">Submissions</h1>
<p class="mt-1 text-[14px] text-ink-soft">Leads are from the Book Free Audit form, Inquiries are from the Contact page form.</p>

<div class="mt-5 flex gap-2">
  <?php foreach (['all' => 'All', 'audit' => 'Leads (Audit)', 'contact' => 'Inquiries (Contact)'] as $key => $label): ?>
    <a href="?type=<?= $key ?>" class="px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.1em] border border-ink-tint <?= $filter === $key ? 'bg-gold text-paper' : 'bg-card text-ink' ?>"><?= $label ?></a>
  <?php endforeach; ?>
</div>
<p class="mt-3 text-[13px] text-ink-soft"><?= count($rows) ?> shown</p>
<?php admin_render_submissions_table($rows); ?>
<?php admin_foot(); ?>
