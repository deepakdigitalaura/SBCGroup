<?php
define('SBC_APP', true);
require __DIR__ . '/../config.php';
session_start();

define('SETTINGS_FILE', __DIR__ . '/../data/settings.json');
define('TESTIMONIALS_FILE', __DIR__ . '/../data/testimonials.json');
define('SEO_FILE', __DIR__ . '/../data/seo.json');
define('ROBOTS_FILE', __DIR__ . '/../robots.txt');

function admin_require_login(): void
{
    if (empty($_SESSION['sbc_admin'])) {
        header('Location: /admin/');
        exit;
    }
}

function admin_read_submissions(?string $type = null): array
{
    if (!is_file(SUBMISSIONS_FILE)) return [];
    $lines = file(SUBMISSIONS_FILE, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    $rows = array_filter(array_map(fn($l) => json_decode($l, true), $lines));
    if ($type !== null) {
        $rows = array_filter($rows, fn($r) => ($r['type'] ?? 'audit') === $type);
    }
    return array_reverse($rows);
}

function admin_read_json(string $file, array $default = []): array
{
    if (!is_file($file)) return $default;
    $data = json_decode(file_get_contents($file), true);
    return is_array($data) ? $data : $default;
}

function admin_write_json(string $file, array $data): void
{
    if (!is_dir(dirname($file))) mkdir(dirname($file), 0755, true);
    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), LOCK_EX);
}
