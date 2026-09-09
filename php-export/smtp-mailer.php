<?php
// ponytail: raw-socket SMTP client, no PHPMailer dependency — fine for low-volume lead mail
if (!defined('SBC_APP')) exit;

function sbc_smtp_send(string $to, string $subject, string $body, string $replyTo = ''): bool
{
    $host = SMTP_HOST;
    $port = SMTP_PORT;

    $sock = @fsockopen($host, $port, $errno, $errstr, 15);
    if (!$sock) return false;

    $read = function () use ($sock) {
        $data = '';
        while ($line = fgets($sock, 515)) {
            $data .= $line;
            if (substr($line, 3, 1) === ' ') break;
        }
        return $data;
    };
    $write = function (string $cmd) use ($sock) { fwrite($sock, $cmd . "\r\n"); };
    $expect = function (string $cmd, string $code) use ($read, $write, $sock) {
        if ($cmd !== '') $write($cmd);
        $resp = $read();
        return substr($resp, 0, 3) === $code;
    };

    $read(); // greeting
    if (!$expect('EHLO sbcgroup.in', '250')) { fclose($sock); return false; }
    if (!$expect('STARTTLS', '220')) { fclose($sock); return false; }
    if (!stream_socket_enable_crypto($sock, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) { fclose($sock); return false; }
    if (!$expect('EHLO sbcgroup.in', '250')) { fclose($sock); return false; }
    if (!$expect('AUTH LOGIN', '334')) { fclose($sock); return false; }
    if (!$expect(base64_encode(SMTP_USER), '334')) { fclose($sock); return false; }
    if (!$expect(base64_encode(SMTP_PASS), '235')) { fclose($sock); return false; }
    if (!$expect('MAIL FROM:<' . SMTP_USER . '>', '250')) { fclose($sock); return false; }
    if (!$expect('RCPT TO:<' . $to . '>', '250')) { fclose($sock); return false; }
    if (!$expect('DATA', '354')) { fclose($sock); return false; }

    $headers = [
        'From: SBC Group Website <' . SMTP_USER . '>',
        'To: <' . $to . '>',
        'Subject: ' . $subject,
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
    ];
    if ($replyTo !== '') $headers[] = 'Reply-To: ' . $replyTo;

    $data = implode("\r\n", $headers) . "\r\n\r\n" . str_replace("\n.", "\n..", $body) . "\r\n.";
    if (!$expect($data, '250')) { fclose($sock); return false; }

    $write('QUIT');
    fclose($sock);
    return true;
}
