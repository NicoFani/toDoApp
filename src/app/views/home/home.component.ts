import { Component, OnInit, input } from '@angular/core';
import { TaskComponent } from '../../components/task/task.component';
import { DatePipe } from '@angular/common';
import { NewTaskModalComponent } from '../../components/new-task-modal/new-task-modal.component';
import { SwitchModalService } from '../../services/switch-modal.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskComponent, NewTaskModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [DatePipe],
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [
    { description: 'Make the bed', isDone: true },
    { description: 'Wash the dishes', isDone: false },
    { description: 'Go to supermarket', isDone: false },
  ];

  fecha: any = '';
  modalSwitch: boolean = false;

  constructor(
    private datePipe: DatePipe,
    private switchModalService: SwitchModalService
  ) {}

  ngOnInit() {
    const today = new Date();
    this.fecha = this.datePipe.transform(today, 'MMMM d, y');

    this.switchModalService.$modal.subscribe((value) => {
      this.modalSwitch = value;
    });
  }

  openModal() {
    this.modalSwitch = true;
    console.log('Modal opened', this.modalSwitch);
  }

  addNewTask(description: string) {
    this.tasks.push({
      description,
      isDone: false,
    });
  }

  toggleTaskStatus(task: Task) {
    task.isDone = !task.isDone;
  }
}
