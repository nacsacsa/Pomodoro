function addTask(){
    const taskName = prompt("Enter task name:");
    if (taskName) {
        const taskContainer = document.createElement("div");
        taskContainer.className = "task";
        taskContainer.innerHTML = `
            <span contenteditable="true" onblur="updateTask(this, '${taskName}')">${taskName}</span>
            <button onclick="deleteTask(this)">🗑️</button>
        `;
        document.getElementById("tasksContainer").insertBefore(taskContainer, document.getElementById("tasksContainer").lastElementChild);
    }
}

function updateTask(taskElement, oldTaskName) {
    const newTaskName = taskElement.textContent.trim();
    const tasks = document.querySelectorAll(".task span");
    tasks.forEach(task => {
        if (task.textContent === oldTaskName) {
            task.textContent = newTaskName;
        }
    });
}

function deleteTask(deleteButton) {
    const task = deleteButton.parentElement;
    task.remove();
}

function playSound() {
    const playsound = document.getElementById("soundEffect");
    playsound.volume = window.volume;
    playsound.play();
}

function skipSound() {
    const skipSound = document.getElementById("skipSound");
    skipSound.volume = window.volume;
    skipSound.play();
}
