let tasks = [];

const taskManager = {
  loadTasks(taskArray) {
    tasks = taskArray;
  },

  getTasks() {
    return tasks;
  },

  addTask(text) {
    const newTask = {
      id: Date.now(),
      text: text,
      done: false
    };
    tasks.push(newTask);
  },

	renderTasks() {
	  const listElement = document.getElementById('taskList');
	  listElement.innerHTML = '';

	  if (tasks.length === 0) {
		const noTasksMsg = document.createElement('li');
		noTasksMsg.textContent = "Keine Aufgaben vorhanden.";
		noTasksMsg.style.fontStyle = "italic";
		listElement.appendChild(noTasksMsg);
		return;
	  }

	  tasks.forEach(task => {
		const li = document.createElement('li');
		li.textContent = task.text;
		listElement.appendChild(li);
	  });
	}
  
  
  
  
};
