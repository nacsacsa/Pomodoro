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

function toggleTimer() {
    if (isTimerRunning) {
        stopTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    clearInterval(timer);
    isTimerRunning = true;
    document.getElementById("toggleButton").textContent = "ÁLLJ";
    document.getElementById("skipButton").style.display = "inline-block";

    timer = setInterval(() => {
        if (timeLeft < 5 && timeLeft > 0) {
            playTickingSound();
        }

        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            playAlarmSound();
            handleSessionEnd();
        }
    }, 1000);
}

function playTickingSound() {
    const tickingSound = document.getElementById("tickingSound");
    tickingSound.volume = window.volume;
    tickingSound.play();
}

function stopTimer() {
    clearInterval(timer);
    isTimerRunning = false;
    document.getElementById("toggleButton").textContent = "FOLYTATÁS";
    document.getElementById("skipButton").style.display = "none";
}

function handleSessionEnd(){
    if (mode === 'pomodoro') {
        pomodoroCount++;
        if (pomodoroCount === longBreakInterval) {
            mode = 'long-break';
            timeLeft = timeSettings[mode];
            pomodoroCount = 0;
        } else {
            mode = 'short-break';
            timeLeft = timeSettings[mode];
        }
    } else {
        mode = 'pomodoro';
        timeLeft = timeSettings[mode];
    }
    selectMode(mode);
    startTimer();
}

function playAlarmSound() {
    const alarmSound = document.getElementById("alarmSound").value;
    const soundEffect = document.getElementById(`alert${alarmSound.charAt(0).toUpperCase() + alarmSound.slice(1)}`);
    soundEffect.currentTime = 0;
    soundEffect.volume = window.volume;
    soundEffect.play();
}

function skipSession() {
    stopTimer();
    handleSessionEnd();

    const skipSound = document.getElementById("skipSound");
    skipSound.volume = window.volume;
    skipSound.play();
}

function updateSkipButtonVisibility() {
    const skipButton = document.getElementById("skipButton");
    if (isTimerRunning) {
        skipButton.style.display = "inline-block";
    } else {
        skipButton.style.display = "none";
    }
}