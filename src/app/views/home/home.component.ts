import { Component, OnInit } from '@angular/core';
import { TaskComponent } from '../../components/task/task.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [DatePipe],
})
export class HomeComponent implements OnInit {
  tasks = [
    { name: 'Task 1', description: 'Make the bed', isDone: true },
    { name: 'Task 2', description: 'Wash the dishes', isDone: false },
    { name: 'Task 3', description: 'Go to supermarket', isDone: false },
  ];

  fecha: any = '';

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    const today = new Date();
    this.fecha = this.datePipe.transform(today, 'MMMM d, y');
  }
}
