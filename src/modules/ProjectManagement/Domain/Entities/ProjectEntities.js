export class ProyectEntities {
  //constructor(id, name, description, type_state_id, deadline, priority, tasks = []) {
  constructor(id, name, description, type_state_id) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type_state_id = type_state_id;
    // this.deadline = deadline;
    // this.priority = priority;
    // this.tasks = tasks;
  }

  // assignTask(task) {
  //   this.tasks.push(task);
  // }

  // removeTask(taskId) {
  //   this.tasks = this.tasks.filter(task => task.id !== taskId);
  // }

}
