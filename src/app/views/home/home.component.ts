import { Component, OnInit, input } from '@angular/core';
import { TaskComponent } from '../../components/task/task.component';
import { DatePipe } from '@angular/common';
import { NewTaskModalComponent } from '../../components/new-task-modal/new-task-modal.component';
import { SwitchModalService } from '../../services/switch-modal.service';
import { Task } from '../../interfaces/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskComponent, NewTaskModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [DatePipe],
})
export class HomeComponent implements OnInit {
  // Array to store the tasks
  localTasks: Task[] = [];
  // Variable to store the current date
  fecha: any = '';
  // Variable to control the modal status
  modalSwitch: boolean = false;

  constructor(
    private datePipe: DatePipe,
    private switchModalService: SwitchModalService,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    // Get the current date
    const today = new Date();
    // Format the date and store it in the variable
    this.fecha = this.datePipe.transform(today, 'MMMM d, y');
    // Get the tasks from the local storage when the component is initialized
    this.localTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    // Subscribe to the modal status
    this.switchModalService.$modal.subscribe((value) => {
      this.modalSwitch = value;
    });
  }

  // Function to open the modal

  openModal() {
    this.modalSwitch = true;
  }

  // Function to add a new task

  addNewTask(description: string) {
    // Get the tasks from the local storage
    const localTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    // Add the new task to the array
    localTasks.push({
      description,
      isDone: false,
    });
    // Call the service to save the tasks
    this.taskService.saveTasks(localTasks);
    // Update the local tasks array to display the new task instantly
    this.localTasks.push({ description, isDone: false });
  }

  // Function to update the status of a task

  toggleTaskStatus(task: Task) {
    task.isDone = !task.isDone;
  }
}
