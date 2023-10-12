// src/app/task.service.ts

import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
    { id: 2, title: 'Task 2', description: 'Description 2', completed: true },
    { id: 3, title: 'Task 3', description: 'Description 3', completed: false },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(newTask: Task): void {
    newTask.id = this.tasks.length + 1;
    this.tasks.push(newTask);
  }

  updateTask(updatedTask: Task): void {
    // Implement logic to update the task in the array or connect to a backend for updates.
  }

  deleteTask(taskToDelete: Task): void {
    this.tasks = this.tasks.filter((task) => task !== taskToDelete);
  }
}
