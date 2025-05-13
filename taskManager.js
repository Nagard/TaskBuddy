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

  toggleDoneStatus(id) {
    tasks.forEach(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });
  },
  
  deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
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
      li.classList.add('task-item');
      if (task.done) {
        li.classList.add('completed');
      }

      // Checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.done;
      checkbox.addEventListener('change', () => {
        this.toggleDoneStatus(task.id);
        this.renderTasks();
        storage.save(tasks);
      });
      li.appendChild(checkbox);

      // Text
      const textNode = document.createTextNode(task.text);
      li.appendChild(textNode);

      // Löschen-Button
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = '🗑';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', () => {
        this.deleteTask(task.id);
        this.renderTasks();
        storage.save(tasks);
      });
      li.appendChild(deleteBtn);

      listElement.appendChild(li);
    });
  }
};