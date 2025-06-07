window.onload = function(){
    loadTasks();
};

function addTask(){
    const input = document.getElementById("inputTask");
    const taskText = input.value.trim();
    if (taskText == ""){
        alert("Enter a valid task");
        return;
    }

    createTaskElement(taskText);
    saveTask(taskText);
    input.value = "";
}

function saveTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Get existing tasks or empty array
    tasks.push(taskText); // Add new task
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save updated array
}

function createTaskElement(taskText) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-class");
    
    const taskName = document.createElement("h3");
    taskName.classList.add("general");
    taskName.textContent = taskText;
    
    taskDiv.appendChild(taskName);
    taskDiv.addEventListener("click", () => {
        taskDiv.classList.toggle("cutout");
        setTimeout(() => {
        taskDiv.remove();
        removeTaskFromStorage(taskText);
        }, 300);
    });
    document.getElementById("taskContainer").appendChild(taskDiv);
}

function loadTasks(){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        createTaskElement(task);
    });
}