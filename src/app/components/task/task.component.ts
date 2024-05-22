import { Component, EventEmitter, Output, input, output } from '@angular/core';
import { HomeComponent } from '../../views/home/home.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  // Input to get the task description from the parent component
  description = input<string>();
  status = input<boolean>();
  // Event to emit the status change of the task
  @Output() statusChange = new EventEmitter<void>();

  // Function to change the status of the task

  changeStatus() {
    // Emit the event to change the status of the task
    this.statusChange.emit();
  }
}
