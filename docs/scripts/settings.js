function openSettings() {
    document.getElementById("settingsModal").style.display = "flex";
    document.getElementById("settingsModal").scrollTop = 0;
}

function closeSettings() {
    applySettings();
    document.getElementById("settingsModal").style.display = "none";
}

function saveSettings() {
    closeSettings();
}

function updateTimeSettings(){
    const pomodoroMinutes = parseInt(document.getElementById("pomodoroTime").value) || 25;
    const shortBreakMinutes = parseInt(document.getElementById("shortBreakTime").value) || 5;
    const longBreakMinutes = parseInt(document.getElementById("longBreakTime").value) || 15;
    longBreakInterval = parseInt(document.getElementById("longBreakInterval").value) || 4;

    timeSettings.pomodoro = pomodoroMinutes * 60;
    timeSettings['short-break'] = shortBreakMinutes * 60;
    timeSettings['long-break'] = longBreakMinutes * 60;

    if (mode === 'pomodoro') {
        timeLeft = timeSettings.pomodoro;
    } else if (mode === 'short-break') {
        timeLeft = timeSettings['short-break'];
    } else if (mode === 'long-break') {
        timeLeft = timeSettings['long-break'];
    }

    updateDisplay();
}