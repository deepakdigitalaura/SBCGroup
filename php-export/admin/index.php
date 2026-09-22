<?php
require __DIR__ . '/auth.php';

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $u = $_POST['username'] ?? '';
    $p = $_POST['password'] ?? '';
    if (hash_equals(ADMIN_USER, $u) && hash_equals(ADMIN_PASS, $p)) {
        $_SESSION['sbc_admin'] = true;
        header('Location: /admin/dashboard.php');
        exit;
    }
    $error = 'Invalid username or password.';
}
if (!empty($_SESSION['sbc_admin'])) {
    header('Location: /admin/dashboard.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charSet="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="/assets/styles-p1oH2nuP.css"/>
<link rel="stylesheet" href="/assets/sbc-extra.css"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;700;900&display=swap"/>
<link rel="icon" type="image/png" href="/favicon.png"/>
<title>Admin Login | SBC</title>
<style>
/* size-16 etc. don't exist in the site's purged Tailwind build, so the logo is sized explicitly here */
body{margin:0;background:var(--paper,#faf8f3)}
.admin-login-logo{width:64px;height:64px;border-radius:999px;object-fit:cover}
</style>
</head>
<body>
<div class="min-h-screen flex items-center justify-center">
  <form method="post" class="w-full max-w-sm border border-ink-tint bg-card p-8">
    <div class="flex justify-center"><img src="/sbc-logo.png" alt="SBC" class="admin-login-logo"/></div>
    <h1 class="mt-5 text-center font-display text-xl font-semibold text-ink">Admin Login</h1>
    <?php if ($error): ?><p class="mt-3 text-center text-[14px] font-medium sbc-text-error"><?= htmlspecialchars($error) ?></p><?php endif; ?>
    <div class="mt-6 grid gap-4">
      <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">Username</span>
        <input name="username" type="text" required class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"/></label>
      <label class="block"><span class="font-medium text-[12px] uppercase tracking-[0.14em] text-ink-soft">Password</span>
        <input name="password" type="password" required class="mt-2 w-full border border-ink-tint bg-paper px-4 py-3 text-[16px] text-ink focus:border-gold focus:outline-none"/></label>
    </div>
    <button type="submit" class="mt-6 w-full bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-gold-tint">Log In</button>
  </form>
</div>
</body>
</html>
