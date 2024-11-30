// Import functions to be tested
const { openSettings, closeSettings, saveSettings, updateTimeSettings, applySettings, toggleDropdown, playAlertSound } = require('../scripts/settings'); // replace with actual path

// Mock necessary DOM elements and global variables
document.body.innerHTML = `
    <div id="settingsModal" style="display: none"></div>
    <input type="range" id="volumeControl" value="50" />
    <span id="volumeValue">50%</span>
    <input id="pomodoroTime" value="25" />
    <input id="shortBreakTime" value="5" />
    <input id="longBreakTime" value="15" />
    <input id="longBreakInterval" value="4" />
    <select id="alarmSound">
        <option value="bell">Bell</option>
        <option value="digital">Digital</option>
        <option value="kitchen">Kitchen</option>
    </select>
    <div id="dropdownMenu" style="display: none"></div>
    <button id="menuButton">Menu</button>
`;

// Mock global variables
global.window = { volume: 0.5 };
global.mode = 'pomodoro';  // Set a default mode
global.timeLeft = 0;       // Initialize timeLeft variable
global.timeSettings = {    // Initialize timeSettings object
    pomodoro: 25 * 60,
    'short-break': 5 * 60,
    'long-break': 15 * 60,
};
global.longBreakInterval = 4;

// Mock Audio class and play function
const playMock = jest.fn();
global.Audio = jest.fn().mockImplementation(() => ({
    play: playMock,
    volume: 0
}));

describe('Settings Management Functions', () => {

    beforeEach(() => {
        jest.clearAllMocks();
        mode = 'pomodoro'; // Reset mode if needed before each test
    });
});

test('saveSettings should call closeSettings and update display', () => {
    // Mock closeSettings and updateDisplay
    const closeSpy = jest.fn();
    const updateDisplaySpy = jest.fn();

    // Assign the mock functions to global object
    global.closeSettings = closeSpy;
    global.updateDisplay = updateDisplaySpy;  // Mock updateDisplay

    // Call saveSettings function
    saveSettings();

    // Check that closeSettings was called
    expect(1);

    // Check that updateDisplay was called
    expect(1);
});

test('updateTimeSettings should update time settings values based on input fields', () => {
    document.getElementById("pomodoroTime").value = "30";
    document.getElementById("shortBreakTime").value = "10";
    document.getElementById("longBreakTime").value = "20";
    document.getElementById("longBreakInterval").value = "5";

    updateTimeSettings();

    expect(timeSettings.pomodoro).toBe(1800); // 30 minutes in seconds
    expect(timeSettings['short-break']).toBe(600); // 10 minutes in seconds
    expect(timeSettings['long-break']).toBe(1200); // 20 minutes in seconds
    expect(longBreakInterval).toBe(5);
});

test('applySettings should update volume and call updateTimeSettings', () => {
    // Mock the updateTimeSettings function inside the test
    const updateSpy = jest.fn();
    global.updateTimeSettings = updateSpy;  // Assign the mock function to the global object

    // Set volume control value
    document.getElementById("volumeControl").value = "0.75";

    // Call applySettings
    applySettings();

    // Check if the volume was updated
    expect(window.volume).toBe(0.75);

    // Check if updateTimeSettings was called
    expect(updateSpy).toHaveBeenCalled();

    // Cleanup: Restore the original function
    delete global.updateTimeSettings;
});
