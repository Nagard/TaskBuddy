document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');

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
    if (text !== '') {
      taskManager.addTask(text);
      taskManager.renderTasks();  // wird später ausgebaut
      // Speicher-Logik (localStorage) mache ich in US2
      taskInput.value = '';
    }
  }
});
