/*
storage.js
Kapselt den Zugriff auf localStorage
*/

/*
  Wir nutzen den Key 'taskbuddy_tasks', um die Daten eindeutig
  im localStorage abzulegen und eventuellen Namenskonflikten 
  mit anderen Apps vorzubeugen.
*/

const storage = {
  save(tasks) {
    localStorage.setItem('taskbuddy_tasks', JSON.stringify(tasks));
  },

  load() {
    const data = localStorage.getItem('taskbuddy_tasks');
    return data ? JSON.parse(data) : [];
  }
};