
<?php
session_start();
?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pomodoro Timer</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/style.css">
</head>

<body>
<header class="navbar">
    <div class="nav-buttons">
        <button onclick="openSettings()"><i class="bi bi-gear-fill"></i>&nbspBeállítások</button>
        <?php if (isset($_SESSION['user_id'])): ?>
            <a href="profile.php" id="profileButton"><i class="bi bi-person-fill"></i>&nbspFiókom</a>
            <a href="logout.php" id="logoutButton"><i class="bi bi-box-arrow-left"></i>&nbspKijelentkezés</a>
        <?php else: ?>
            <a href="../signUp.html" id="signUpButton"><i class="bi bi-person-fill"></i>&nbspRegisztrálás</a>
            <a href="../login.html" id="loginButton"><i class="bi bi-box-arrow-in-right"></i>&nbspBejelentkezés</a>
        <?php endif; ?>

        <button id="menuButton" onclick="toggleDropdown()"><i class="bi bi-three-dots-vertical"></i></button>
    </div>
</header>
</body>
</html>
