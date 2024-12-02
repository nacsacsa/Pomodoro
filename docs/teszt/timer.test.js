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

    // Correctly display time in updateDisplay
    test('should display correct time format in updateDisplay', () => {
        global.timeLeft = 1500; // 25 minutes
        updateDisplay();
        expect(document.getElementById('timeDisplay').textContent).toBe("25:00");
    });

    // Update the mode and display for pomodoro
    test('should update the mode and display for pomodoro', () => {
        selectMode('pomodoro');
        expect(document.body.classList.contains('pomodoro-mode')).toBe(true);
        expect(document.getElementById('modeTitle').textContent).toBe("Pomodoro");
    });

    // Stop timer and update button text
    test('should stop timer and update button text', () => {
        startTimer();
        stopTimer();
        expect(global.isTimerRunning).toBe(false);
        expect(document.getElementById("toggleButton").textContent).toBe("FOLYTATÁS");
    });

    // Handle session end and switch modes correctly
    test('should handle session end and switch modes correctly', () => {
        selectMode('pomodoro');
        global.pomodoroCount = 3;
        handleSessionEnd();
        expect(global.mode).toBe('pomodoro');
    });

    // Play alarm sound at the end of a session
    test('should play alarm sound at the end of a session', () => {
        const playAlarmSoundSpy = jest.spyOn(global, 'playAlarmSound');
        handleSessionEnd();
        expect(playAlarmSoundSpy).toHaveBeenCalled();
    });

    // Update the mode and display for short-break
    test('should update the mode and display for short-break', () => {
        selectMode('short-break');
        expect(document.body.classList.contains('short-break-mode')).toBe(true);
        expect(document.getElementById('modeTitle').textContent).toBe("Rövid Szünet");
    });

    // Update the mode and display for long-break
    test('should update the mode and display for long-break', () => {
        selectMode('long-break');
        expect(document.body.classList.contains('long-break-mode')).toBe(true);
        expect(document.getElementById('modeTitle').textContent).toBe("Hosszú Szünet");
    });

    // Start timer and decrement timeLeft
    test('should start timer and decrement timeLeft', () => {
        global.timeLeft = 5;
        startTimer();
        jest.advanceTimersByTime(2000); // simulate 2 seconds
        expect(global.timeLeft).toBe(5);
        stopTimer();
    });
});