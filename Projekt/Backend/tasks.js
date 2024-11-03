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

function deleteTask(deleteButton) {
    const task = deleteButton.parentElement;
    task.remove();
}