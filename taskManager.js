/*
taskManager.js
Kümmert sich um das Aufgaben-Datenmodell und das Rendern im DOM
*/

let tasks = [];

const taskManager = {
  // Lädt Aufgaben ins lokale Array
  loadTasks(taskArray) {
    tasks = taskArray;
  },

  // Liefert alle Aufgaben zurück
  getTasks() {
    return tasks;
  },

  // Neue Aufgabe hinzufügen (User Story 1)
  addTask(text) {
    const newTask = {
      id: Date.now(),
      text: text,
      done: false
    };
    tasks.push(newTask);
  },

  // Aufgabe als erledigt/unerledigt umschalten (User Story 3)
  toggleTask(id) {
    tasks.forEach(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });
  },

  // Aufgabe löschen (User Story 4)
  deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
  },

  // Aufgabenliste im DOM aktualisieren (User Story 2)
  renderTasks() {
    const listElement = document.getElementById('taskList');
    listElement.innerHTML = '';

    tasks.forEach(task => {
      const li = document.createElement('li');
      li.classList.add('task-item');
      // Visuelles Feedback bei erledigten Aufgaben
      if (task.done) {
        li.classList.add('completed');
      }

      // Checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.done;
      checkbox.addEventListener('change', () => {
        this.toggleTask(task.id);
        this.renderTasks();
        storage.save(tasks);
      });
      li.appendChild(checkbox);

      // Textnode
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