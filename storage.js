const storage = {
  save(tasks) {
    localStorage.setItem('taskbuddy_tasks', JSON.stringify(tasks));
  },
  load() {
    const data = localStorage.getItem('taskbuddy_tasks');
    return data ? JSON.parse(data) : [];
  }
};
