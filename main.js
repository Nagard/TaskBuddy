/*
main.js
Einstiegspunkt für das DOM-Handling
*/

document.addEventListener('DOMContentLoaded', () => {
  // Elemente auswählen
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');

  // Aufgaben initial aus localStorage laden und im DOM anzeigen
  taskManager.loadTasks(storage.load());
  taskManager.renderTasks();

  // Klick auf den "Hinzufügen"-Button
  addTaskBtn.addEventListener('click', () => {
    addNewTask();
  });

  // Enter-Taste im Inputfeld
  taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addNewTask();
    }
  });

  // Funktion zum Hinzufügen einer neuen Aufgabe (User Story 1)
  function addNewTask() {
    const text = taskInput.value.trim();
    if (text !== '') {
      // Aufgabe im TaskManager anlegen
      taskManager.addTask(text);
      // Neu rendern
      taskManager.renderTasks();
      // Daten speichern
      storage.save(taskManager.getTasks());
      // Eingabefeld leeren
      taskInput.value = '';
    }
  }
});