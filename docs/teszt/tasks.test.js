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
})