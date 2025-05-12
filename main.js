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
	  const errorLabel = document.getElementById('errorLabel');

	  if (!text) {
		errorLabel.textContent = "Bitte gib eine Aufgabe ein!";
		errorLabel.style.display = "inline";
		return;
	  } else {
			errorLabel.style.display = "none";
	  }

	  taskManager.addTask(text);
	  taskManager.renderTasks();
	  taskInput.value = '';
}

});
