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
  taskDescription = input<string>();
  status = input<boolean>();
  @Output() statusChange = new EventEmitter<void>();

  changeStatus() {
    this.statusChange.emit();
  }
}
