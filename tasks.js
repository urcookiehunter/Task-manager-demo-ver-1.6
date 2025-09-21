// Load tasks from localStorage
function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render tasks into table
function renderTasks() {
  const tasks = getTasks();
  const table = document.getElementById("taskTable");
  table.innerHTML = "";

  tasks.forEach((task, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${task.name}</td>
      <td>
        <span class="status ${task.status}" onclick="toggleStatus(${index})">
          ${task.status === "done" ? "Done" : "Not Started"}
        </span>
      </td>
      <td>
        <button class="action-btn" onclick="removeTask(${index})">Remove</button>
      </td>
    `;

    table.appendChild(row);
  });
}

// Add task
document.getElementById("taskForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const input = document.getElementById("taskInput");
  const tasks = getTasks();
  tasks.push({ name: input.value, status: "not-started" });
  saveTasks(tasks);
  input.value = "";
  renderTasks();
});

// Remove task
function removeTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);
  renderTasks();
}

// Toggle task status
function toggleStatus(index) {
  const tasks = getTasks();
  tasks[index].status = tasks[index].status === "done" ? "not-started" : "done";
  saveTasks(tasks);
  renderTasks();
}

// Initial render
renderTasks();
