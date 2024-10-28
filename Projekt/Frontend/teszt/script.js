let timeSettings = {
    pomodoro: 1500,
    'short-break': 300,
    'long-break': 900
};
let timeLeft = timeSettings.pomodoro;
let timer;
let mode = 'pomodoro';

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timeDisplay").textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function selectMode(selectedMode) {
    mode = selectedMode;
    timeLeft = timeSettings[mode];
    updateDisplay();

    if (mode === 'pomodoro') {
        document.body.style.backgroundColor = '#e74c3c';
        document.getElementById("modeTitle").textContent = "Pomodoro";
    } else if (mode === 'short-break') {
        document.body.style.backgroundColor = '#3498db';
        document.getElementById("modeTitle").textContent = "Short Break";
    } else if (mode === 'long-break') {
        document.body.style.backgroundColor = '#2ecc71';
        document.getElementById("modeTitle").textContent = "Long Break";
    }

    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    document.getElementById(`${mode}Link`).classList.add("active");
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            alert(`${mode === 'pomodoro' ? 'Pomodoro' : mode} completed!`);
            selectMode(mode);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function addTask() {
    const taskName = prompt("Enter task name:");
    if (taskName) {
        const taskContainer = document.createElement("div");
        taskContainer.className = "task";
        taskContainer.innerHTML = `
            <span>${taskName}</span>
            <button onclick="showEditTaskPrompt('${taskName}')">⋮</button>
        `;
        document.getElementById("tasksContainer").insertBefore(taskContainer, document.getElementById("tasksContainer").lastElementChild);
    }
}

function showEditTaskPrompt(taskName) {
    const newTaskName = prompt("Edit task name:", taskName);
    if (newTaskName) {
        const tasks = document.querySelectorAll(".task span");
        tasks.forEach(task => {
            if (task.textContent === taskName) {
                task.textContent = newTaskName;
            }
        });
    }
}

selectMode('pomodoro');
updateDisplay();
