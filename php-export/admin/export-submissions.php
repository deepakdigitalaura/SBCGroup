<?php
require __DIR__ . '/auth.php';
admin_require_login();
require __DIR__ . '/_submissions-table.php';

$filter = $_GET['type'] ?? 'all';
$all = admin_read_submissions();
$rows = $filter === 'all' ? $all : array_filter($all, fn($r) => ($r['type'] ?? 'audit') === $filter);

header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename="submissions-' . date('Y-m-d') . '.csv"');

$out = fopen('php://output', 'w');
fputcsv($out, ['Date', 'Name', 'Email', 'Mobile', 'Help With', 'Message', 'Source', 'Type']);
foreach ($rows as $r) {
    fputcsv($out, [
        date('d M Y, H:i', strtotime($r['time'])),
        trim($r['first_name'] . ' ' . $r['last_name']),
        $r['email'],
        $r['mobile'],
        $r['help_with'],
        $r['message'],
        $r['source'],
        $r['type'] ?? 'audit',
    ]);
}
fclose($out);
