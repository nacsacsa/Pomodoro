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