let timeSettings = {
    pomodoro: 1500, 'short-break': 300, 'long-break': 900
};
let timeLeft = timeSettings.pomodoro;
let timer;
let mode = 'pomodoro';
let isTimerRunning = false;
let pomodoroCount = 0;
let longBreakInterval = 4;

document.addEventListener("DOMContentLoaded", function () {
    selectMode('pomodoro');
    updateDisplay();
    updateSkipButtonVisibility();
});

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timeDisplay").textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    updateTitle();
}

function selectMode(selectedMode) {
    mode = selectedMode;
    timeLeft = timeSettings[mode];
    updateDisplay();

    document.body.classList.remove('pomodoro-mode', 'short-break-mode', 'long-break-mode');

    if (mode === 'pomodoro') {
        document.body.classList.add('pomodoro-mode');
        document.getElementById("modeTitle").textContent = "Pomodoro";
        document.querySelector('.navbar').classList.add('pomodoro-navbar');
        document.querySelector('.navbar').classList.remove('short-break-navbar', 'long-break-navbar');
    } else if (mode === 'short-break') {
        document.body.classList.add('short-break-mode');
        document.getElementById("modeTitle").textContent = "Rövid Szünet";
        document.querySelector('.navbar').classList.add('short-break-navbar');
        document.querySelector('.navbar').classList.remove('pomodoro-navbar', 'long-break-navbar');
    } else if (mode === 'long-break') {
        document.body.classList.add('long-break-mode');
        document.getElementById("modeTitle").textContent = "Hosszú Szünet";
        document.querySelector('.navbar').classList.add('long-break-navbar');
        document.querySelector('.navbar').classList.remove('pomodoro-navbar', 'short-break-navbar');
    }

    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    document.getElementById(`${mode}Link`).classList.add("active");

    updateTitle();
    updateSkipButtonVisibility();
}

function updateTitle() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (mode === 'pomodoro') {
        document.title = `${timeString} - Ideje fókuszálni`;
    } else {
        document.title = `${timeString} - Ideje pihenni`;
    }
}