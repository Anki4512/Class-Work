const tasks = {
    "task1": "task1/index.html",
    "task2": "task2/index.html",
    "task3": "task3/index.html"
};

function loadTask(task) {
    document.getElementById("content_frame").src = tasks[task];
}
