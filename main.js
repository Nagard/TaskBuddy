document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const errorLabel = document.getElementById('errorLabel');

  // US2: Beim Laden die Tasks aus localStorage holen
  taskManager.loadTasks(storage.load());
  taskManager.renderTasks();

  addTaskBtn.addEventListener('click', () => {
    addNewTask();
  });

  taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addNewTask();
    }
  });

  function addNewTask() {
    const text = taskInput.value.trim();
    if (!text) {
      errorLabel.textContent = "Bitte gib eine Aufgabe ein!";
      errorLabel.style.display = "inline";
      return;
    } else {
      errorLabel.style.display = "none";
    }
    taskManager.addTask(text);
    taskManager.renderTasks();
    storage.save(taskManager.getTasks());
    taskInput.value = '';
  }
});