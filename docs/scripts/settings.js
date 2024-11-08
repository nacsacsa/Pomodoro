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