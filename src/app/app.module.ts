// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';
import { FileUploadComponent } from './file-upload/file-upload.component'; // Import FileUploadComponent

@NgModule({
  declarations: [AppComponent, TaskListComponent, FileUploadComponent], // Include FileUploadComponent
  imports: [BrowserModule, FormsModule],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
