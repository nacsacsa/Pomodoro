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
        <div id="dropdownMenu" class="dropdown">
            <a id="dropdown2" href="calendar.php"><i class="bi bi-calendar"></i>&nbspNaptár</a>
        </div>
    </div>
</header>
<main>
    <div class="timer-display">
        <nav class="mode-switch">
            <a id="pomodoroLink" onclick="selectMode('pomodoro')">Pomodoro</a>
            <a id="short-breakLink" onclick="selectMode('short-break')">Rövid Szünet</a>
            <a id="long-breakLink" onclick="selectMode('long-break')">Hosszú Szünet</a>
        </nav>
        <h2 id="modeTitle">Pomodoro</h2>
        <div id="timeDisplay">25:00</div>
        <button onclick="toggleTimer(); playSound();" id="toggleButton">KEZDÉS</button>
        <button class="btn btn-outline-light" onclick="skipSession(); skipSound();" id="skipButton">
            <i class="bi bi-skip-end-fill"></i>
        </button>
        <audio id="soundEffect" src="../static/sounds/Click.m4a" preload="auto"></audio>
        <audio id="tickingSound" src="../static/sounds/Tick.m4a" preload="auto"></audio>
        <audio id="alertBell" src="../static/sounds/Bell.m4a" preload="auto"></audio>
        <audio id="alertKitchen" src="../static/sounds/Kitchen.m4a" preload="auto"></audio>
        <audio id="alertDigital" src="../static/sounds/Digital.m4a" preload="auto"></audio>
        <audio id="skipSound" src="../static/sounds/Skip.m4a" preload="auto"></audio>
    </div>
    <div class="task-container">
        <h3>Feladatok</h3>
        <div id="tasksContainer">
            <button class="add-task-btn" onclick="addTask()">+ Feladat hozzáadása</button>
        </div>
    </div>
</main>

<script src="../scripts/settings.js"></script>
<script src="../scripts/tasks.js"></script>
<script src="../scripts/timer.js"></script>

<div id="settingsModal" class="settings-modal">
    <div class="settings-content">
        <span class="close" onclick="closeSettings()">&times;</span>
        <h2>Beállítások</h2>
        <div class="settings-section">
        <h3>Időzítő</h3>
        <label>
            Pomodoro (perc)
            <input type="number" id="pomodoroTime" value="25" min="1">
        </label>
        <Label>
            Rövid szünet (perc)
            <input type="number" id="shortBreakTime" value="5" min="1">
        </Label>
        <label>
            Hosszú Szünet Intervallum
            <input type="number" id="longBreakInterval" value="4">
        </label>
    </div>
    </div>
</div>
</body>
</html>