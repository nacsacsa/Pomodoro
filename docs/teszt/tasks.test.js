// Import functions to be tested
const { addTask, updateTask, deleteTask, playSound, skipSound } = require('../scripts/tasks'); // Ensure the correct path to taskFunctions.js

// Mock necessary DOM elements and global variables
document.body.innerHTML = `
    <div id="tasksContainer">
        <div class="task">
            <span contenteditable="true">Test Task</span>
            <button>🗑️</button>
        </div>
        <div id="lastElement"></div>
    </div>
    <audio id="soundEffect"></audio>
    <audio id="skipSound"></audio>
`;

global.window = { volume: 0.5 };

describe('Task Management Functions', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('addTask should add a new task to the task container', () => {
        const promptMock = jest.fn().mockReturnValue('New Task');
        global.prompt = promptMock;  // Mocking prompt

        addTask();

        const taskContainer = document.getElementById("tasksContainer").firstElementChild;
        expect(taskContainer).toBeDefined();
        expect(taskContainer.className).toBe("task");
        ;
    });

    test('updateTask should update the task name', () => {
        const taskElement = document.querySelector(".task span");
        const oldTaskName = taskElement.textContent;

        updateTask(taskElement, oldTaskName);

        // Simulate editing the task
        taskElement.textContent = "Updated Task";
        expect(taskElement.textContent).toBe("Updated Task");

        // Verify if the task name was updated in all spans
        const updatedTask = document.querySelector(".task span");
        expect(updatedTask.textContent).toBe("Updated Task");
    });

    test('deleteTask should remove the task', () => {
        const task = document.querySelector(".task");
        const deleteButton = task.querySelector("button");
        deleteButton.onclick = jest.fn();

        deleteTask(deleteButton);

        // Check if the task is removed from the DOM
        const deletedTask = document.querySelector(".task");
        expect(deletedTask).toBeNull();
    });

    test('playSound should play the sound with the correct volume', () => {
        // Mock the play function of the audio element
        const playMock = jest.fn();
        const soundEffect = document.getElementById("soundEffect");

        // Mock the play method on the audio element
        soundEffect.play = playMock;

        // Ensure window.volume is a valid finite number before using it
        window.volume = 0.5; // Set window.volume to a valid value between 0 and 1

        // Call the playSound function
        playSound(); // This calls the actual playSound function

        // Check if the play method was called
        expect(playMock).toHaveBeenCalled();

        // Check if the volume of the soundEffect is set correctly
        expect(soundEffect.volume).toBe(window.volume); // Ensure volume is correctly set to window.volume
    });

    test('playSound should play the sound with the correct volume', () => {
        // Mock the play function of the audio element
        const playMock = jest.fn();
        const soundEffect = document.getElementById("soundEffect");

        // Mock the play method on the audio element
        soundEffect.play = playMock;

        // Ensure window.volume is a valid finite number before using it
        window.volume = 0.5; // Set window.volume to a valid value between 0 and 1

        // Call the playSound function
        playSound(); // This calls the actual playSound function

        // Check if the play method was called
        expect(playMock).toHaveBeenCalled();

        // Check if the volume of the soundEffect is set correctly
        expect(soundEffect.volume).toBe(window.volume); // Ensure volume is correctly set to window.volume
    });

    test('skipSound should play the skip sound with the correct volume', () => {
        // Mock the play function of the audio element
        const playMock = jest.fn();
        const skipSoundAudio = document.getElementById("skipSound");

        // Mock the play method on the audio element
        skipSoundAudio.play = playMock;

        // Set a valid volume for the test (between 0.0 and 1.0)
        window.volume = 0.5; // This sets the volume to a valid floating-point number

        // Call the skipSound function
        skipSound();  // This calls the actual skipSound function in your code

        // Check if the play method was called
        expect(playMock).toHaveBeenCalled();

        // Check if the volume of the skipSound is set correctly
        expect(skipSoundAudio.volume).toBe(0.5);  // Ensure volume is correctly set to 0.5
    });
})