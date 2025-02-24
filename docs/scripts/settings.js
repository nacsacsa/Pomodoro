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

function applySettings() {
    const alarmSound = document.getElementById("alarmSound").value;
    const volume = document.getElementById("volumeControl").value;
    window.volume = volume / 100;
    updateTimeSettings();

    console.log({
        longBreakInterval,
        alarmSound,
        volume: window.volume
    });
}

window.onclick = function (event) {
    const modal = document.getElementById("settingsModal");
    if (event.target === modal) {
        closeSettings();
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const volumeControl = document.getElementById("volumeControl");
    const pomodoroInput = document.getElementById("pomodoroTime");
    const shortBreakInput = document.getElementById("shortBreakTime");
    const longBreakInput = document.getElementById("longBreakTime");
    const longBreakIntervalInput = document.getElementById("longBreakInterval");

    if (volumeControl) {
        volumeControl.value = 50;
        window.volume = volumeControl.value / 100;

        volumeControl.addEventListener("input", function () {
            const volumeValue = document.getElementById("volumeValue");
            volumeValue.textContent = this.value + "%";

            window.volume = this.value / 100;
        });
    } else {
        console.error("Volume control element not found");
    }

    if (pomodoroInput && shortBreakInput && longBreakInput && longBreakIntervalInput) {
        pomodoroInput.addEventListener("input", updateTimeSettings);
        shortBreakInput.addEventListener("input", updateTimeSettings);
        longBreakInput.addEventListener("input", updateTimeSettings);
        longBreakIntervalInput.addEventListener("input", updateTimeSettings);
    } else {
        console.error("One or more input elements not found");
    }
});

function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

document.addEventListener('click', function (event) {
    const dropdown = document.getElementById("dropdownMenu");
    const button = document.getElementById("menuButton");
    if (!dropdown.contains(event.target) && !button.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});

const alertSounds = {
    bell: 'sounds/Bell.m4a', digital: 'sounds/Digital.m4a', kitchen: 'sounds/Kitchen.m4a'
};

function playAlertSound() {
    const selectedSound = document.getElementById("alarmSound").value;
    const volume = document.getElementById("volumeControl").value / 100;
    const audio = new Audio(alertSounds[selectedSound]);
    audio.volume = volume;
    audio.play();
}

module.exports = {
    openSettings,
    closeSettings,
    saveSettings,
    updateTimeSettings,
    applySettings,
    toggleDropdown,
    playAlertSound
};
