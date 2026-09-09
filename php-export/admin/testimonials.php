<?php
require __DIR__ . '/auth.php';
admin_require_login();
require __DIR__ . '/_layout.php';

$testimonials = admin_read_json(TESTIMONIALS_FILE, []);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['add'])) {
        $quote = trim($_POST['quote'] ?? '');
        $author = trim($_POST['author'] ?? '');
        if ($quote !== '' && $author !== '') {
            $testimonials[] = ['quote' => $quote, 'author' => $author];
            admin_write_json(TESTIMONIALS_FILE, $testimonials);
        }
    } elseif (isset($_POST['delete'])) {
        unset($testimonials[(int)$_POST['delete']]);
        $testimonials = array_values($testimonials);
        admin_write_json(TESTIMONIALS_FILE, $testimonials);
    }
    $saved = true;
}

$admin_active = 'testimonials';
admin_head('Testimonials');
?>
<h1 class="font-display text-2xl font-semibold tracking-tight text-ink">Testimonials</h1>
<p class="mt-1 text-[14px] text-ink-soft">These are shown live in the "Trusted by Founders & Institutions" section on the homepage, in the order listed below.</p>
<?php if (!empty($saved)): ?><p class="mt-3 text-[14px] font-medium sbc-text-success">Saved.</p><?php endif; ?>

<div class="mt-6 grid gap-8 lg:grid-cols-2">
  <form method="post" class="border border-ink-tint bg-card p-6 grid gap-4">
    <h2 class="font-display text-lg font-semibold text-ink">Add Testimonial</h2>
    <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">Quote</span>
      <textarea name="quote" rows="3" required class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"></textarea></label>
    <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">Author / Title</span>
      <input name="author" required class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"/></label>
    <button type="submit" name="add" value="1" class="mt-2 bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint">Add</button>
  </form>
  <div class="border border-ink-tint bg-card p-6">
    <h2 class="font-display text-lg font-semibold text-ink">All Testimonials</h2>
    <ul class="mt-4 space-y-2 text-[14px]">
      <?php if (!$testimonials): ?><li class="text-ink-soft">None yet.</li><?php endif; ?>
      <?php foreach ($testimonials as $i => $t): ?>
        <li class="border-t border-ink-tint pt-3 flex items-start justify-between gap-3">
          <div><p class="italic text-charcoal">&ldquo;<?= htmlspecialchars($t['quote']) ?>&rdquo;</p><p class="mt-1 text-[12px] uppercase tracking-[0.1em] text-ink-soft"><?= htmlspecialchars($t['author']) ?></p></div>
          <form method="post"><button type="submit" name="delete" value="<?= $i ?>" class="text-[12px] font-semibold uppercase tracking-[0.1em] sbc-text-error hover:underline">Remove</button></form>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>
</div>
<?php admin_foot(); ?>
