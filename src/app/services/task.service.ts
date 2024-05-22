import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  // Function to save the tasks in the local storage

  saveTasks(tasks: any) {
    // Save the tasks in the local storage, use JSON.stringify to convert the array to a string
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
