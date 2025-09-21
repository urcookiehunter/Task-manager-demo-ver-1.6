function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function renderDashboardTasks() {
  const tasks = getTasks();
  const table = document.getElementById("dashboardTasks");
  table.innerHTML = "";

  tasks.forEach(task => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${task.name}</td>
      <td class="status ${task.status}">
        ${task.status === "done" ? "Done" : "Not Started"}
      </td>
    `;

    table.appendChild(row);
  });
}

renderDashboardTasks();
