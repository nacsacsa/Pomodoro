const {
    timeSettings,
    selectMode,
    toggleTimer,
    startTimer,
    stopTimer,
    handleSessionEnd,
    updateDisplay,
} = require('../scripts/timer'); // adjust the path accordingly

// Mock necessary DOM elements and global variables
document.body.innerHTML = `
    <div id="timeDisplay"></div>
    <div id="modeTitle"></div>
    <button id="toggleButton"></button>
    <button id="skipButton"></button>
    <nav class="navbar">
        <a id="pomodoroLink" href="#">Pomodoro</a>
        <a id="short-breakLink" href="#">Short Break</a>
        <a id="long-breakLink" href="#">Long Break</a>
    </nav>
    <audio id="tickingSound"></audio>
    <audio id="alertBell"></audio>
    <audio id="skipSound"></audio>
`;

// Mock global window object
global.window = { volume: 0.5 };

// Reset timer state before each test
beforeEach(() => {
    global.timeLeft = timeSettings.pomodoro; // Reset to initial pomodoro time
    global.mode = 'pomodoro'; // Set initial mode
    global.isTimerRunning = false; // Reset timer state
    global.pomodoroCount = 0; // Reset count
});

describe('Pomodoro Timer Functions', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.restoreAllMocks();
    });

    // Initialize time settings correctly
    test('should initialize time settings correctly', () => {
        expect(timeSettings.pomodoro).toBe(1500); // 25 minutes
        expect(timeSettings['short-break']).toBe(300); // 5 minutes
        expect(timeSettings['long-break']).toBe(900); // 15 minutes
    });