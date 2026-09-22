<?php
define('SBC_APP', true);
require __DIR__ . '/config.php';
require __DIR__ . '/smtp-mailer.php';
require __DIR__ . '/recaptcha.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /contact');
    exit;
}

if (!sbc_recaptcha_ok()) {
    header('Location: /contact?status=error');
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
    header('Location: /contact?status=error');
    exit;
}

$entry = [
    'id' => uniqid('', true),
    'type' => 'contact',
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

$subject = "New Contact Enquiry — $first $last";
$body = "New enquiry from the website contact form:\n\n"
    . "Name: $first $last\n"
    . "Email: $email\n"
    . "Mobile: $mobile\n"
    . "Enquiring about: $help\n"
    . "How they heard about us: $source\n\n"
    . "Message:\n$message\n";

sbc_smtp_send(SMTP_TO, $subject, $body, $email);

header('Location: /contact?status=success');
exit;
