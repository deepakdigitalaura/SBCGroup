<?php
function admin_render_submissions_table(array $rows): void
{
?>
  <div class="mt-8 sbc-scroll-x border border-ink-tint">
    <table class="w-full text-left text-[14px]">
      <thead class="bg-ink text-paper">
        <tr>
          <th class="px-4 py-3">Date</th>
          <th class="px-4 py-3">Name</th>
          <th class="px-4 py-3">Email</th>
          <th class="px-4 py-3">Mobile</th>
          <th class="px-4 py-3">Help With</th>
          <th class="px-4 py-3">Message</th>
          <th class="px-4 py-3">Source</th>
        </tr>
      </thead>
      <tbody>
        <?php if (!$rows): ?>
          <tr><td class="px-4 py-6 text-ink-soft" colspan="7">No submissions yet.</td></tr>
        <?php endif; ?>
        <?php foreach ($rows as $r): ?>
        <tr class="border-t border-ink-tint sbc-align-top">
          <td class="px-4 py-3 whitespace-nowrap text-ink-soft"><?= htmlspecialchars(date('d M Y, H:i', strtotime($r['time']))) ?></td>
          <td class="px-4 py-3 font-medium text-ink"><?= htmlspecialchars(trim($r['first_name'] . ' ' . $r['last_name'])) ?></td>
          <td class="px-4 py-3"><a class="text-gold hover:underline" href="mailto:<?= htmlspecialchars($r['email']) ?>"><?= htmlspecialchars($r['email']) ?></a></td>
          <td class="px-4 py-3"><?= htmlspecialchars($r['mobile']) ?></td>
          <td class="px-4 py-3"><?= htmlspecialchars($r['help_with']) ?></td>
          <td class="px-4 py-3 max-w-sm text-charcoal"><?= nl2br(htmlspecialchars($r['message'])) ?></td>
          <td class="px-4 py-3"><?= htmlspecialchars($r['source']) ?></td>
        </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>
<?php
}
