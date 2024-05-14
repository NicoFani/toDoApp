import { Component, input } from '@angular/core';
import { HomeComponent } from '../../views/home/home.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  taskDescription = input<string>();
  status = input<boolean>();
}
