let tasks = [];

const taskManager = {
  addTask(text) {
    const newTask = {
      id: Date.now(),
      text: text,
      done: false
    };

    tasks.push(newTask);
  },

  renderTasks() {
    // In US1 erstmal nur minimal. Hier kann ich in US2/US3 mehr hinzufügen
    console.log("Rendering tasks - US1: nothing special yet.");
  }

};
