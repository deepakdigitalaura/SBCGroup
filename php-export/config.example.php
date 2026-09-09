<?php
if (!defined('SBC_APP')) exit;

// SMTP (Gmail app password) — used to send audit-form leads
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USER', 'you@example.com');
define('SMTP_PASS', 'your-gmail-app-password');
define('SMTP_TO',   'you@example.com');

// Admin panel login
define('ADMIN_USER', 'admin');
define('ADMIN_PASS', 'change-me');

define('SUBMISSIONS_FILE', __DIR__ . '/data/submissions.jsonl');
