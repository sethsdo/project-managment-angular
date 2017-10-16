import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
  
  tasks = [];

  constructor() { }

  retrieveTasks() {
    console.log(this.tasks)
    return this.tasks;
  }

  createTask(task) {
    console.log(this.tasks.length, "this is service")
    this.tasks.push(task);
  }

}
