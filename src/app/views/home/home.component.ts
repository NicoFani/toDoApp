import { Component } from '@angular/core';
import { TaskComponent } from '../../components/task/task.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tasks = [
    { name: 'Task 1', description: 'Make the bed', isDone: true },
    { name: 'Task 2', description: 'Wash the dishes', isDone: false },
    { name: 'Task 3', description: 'Go to supermarket', isDone: false },
  ];
}
