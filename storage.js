const storage = {
  save(tasks) {
    localStorage.setItem('taskbuddy_tasks', JSON.stringify(tasks));
  },
  load() {
	  const data = localStorage.getItem('taskbuddy_tasks');
	  if (data) {
		try {
		  return JSON.parse(data);
		} catch(e) {
		  console.error("Fehler beim Parsen des localStorage:", e);
		  return [];
		}
	  }
	  return [];
}
};
