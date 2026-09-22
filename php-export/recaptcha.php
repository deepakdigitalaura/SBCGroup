<?php
if (!defined('SBC_APP')) exit;

function sbc_recaptcha_ok(): bool {
    $token = $_POST['g-recaptcha-response'] ?? '';
    if ($token === '') return false;

    $ch = curl_init('https://www.google.com/recaptcha/api/siteverify');
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query([
            'secret' => RECAPTCHA_SECRET_KEY,
            'response' => $token,
            'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
        ]),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 10,
    ]);
    $result = curl_exec($ch);
    curl_close($ch);

    if ($result === false) return false;
    $data = json_decode($result, true);
    return !empty($data['success']);
}
