<?php
define('SBC_APP', true);
require __DIR__ . '/config.php';
require __DIR__ . '/smtp-mailer.php';
require __DIR__ . '/recaptcha.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /book-free-audit');
    exit;
}

if (!sbc_recaptcha_ok()) {
    header('Location: /book-free-audit?status=error');
    exit;
}

$first   = trim($_POST['first_name'] ?? '');
$last    = trim($_POST['last_name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$mobile  = trim($_POST['mobile'] ?? '');
$help    = trim($_POST['help_with'] ?? '');
$message = trim($_POST['message'] ?? '');
$source  = trim($_POST['source'] ?? '');

if ($first === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $mobile === '' || $message === '') {
    header('Location: /book-free-audit?status=error');
    exit;
}

$entry = [
    'id' => uniqid('', true),
    'type' => 'audit',
    'time' => date('c'),
    'first_name' => $first,
    'last_name' => $last,
    'email' => $email,
    'mobile' => $mobile,
    'help_with' => $help,
    'message' => $message,
    'source' => $source,
];

if (!is_dir(dirname(SUBMISSIONS_FILE))) mkdir(dirname(SUBMISSIONS_FILE), 0755, true);
file_put_contents(SUBMISSIONS_FILE, json_encode($entry) . "\n", FILE_APPEND | LOCK_EX);

$subject = "New Free Audit Request — $first $last";
$body = "New audit request from the website:\n\n"
    . "Name: $first $last\n"
    . "Email: $email\n"
    . "Mobile: $mobile\n"
    . "Looking for help with: $help\n"
    . "How they heard about us: $source\n\n"
    . "Message:\n$message\n";

sbc_smtp_send(SMTP_TO, $subject, $body, $email);

header('Location: /book-free-audit?status=success');
exit;
