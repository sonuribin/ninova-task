// src/app/task-list/task-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = { id: 0, title: '', description: '', completed: false };

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    if (this.newTask.title && this.newTask.description) {
      this.taskService.addTask(this.newTask);
      this.newTask = { id: 0, title: '', description: '', completed: false };
    }
  }

  markCompleted(task: Task): void {
    task.completed = true;
    this.taskService.updateTask(task);
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task);
    this.tasks = this.tasks.filter((t) => t !== task);
  }
}
