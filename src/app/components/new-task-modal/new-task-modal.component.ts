import { Component, EventEmitter, Output } from '@angular/core';
import { SwitchModalService } from '../../services/switch-modal.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-new-task-modal',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './new-task-modal.component.html',
  styleUrl: './new-task-modal.component.css',
})
export class NewTaskModalComponent {
  // Event to emit the task description to the parent component
  @Output() taskAdded = new EventEmitter<string>();
  // Form to input the task description
  taskForm: FormGroup = new FormGroup({});

  constructor(
    private switchModalService: SwitchModalService,
    private formBuilder: FormBuilder
  ) {
    // Create the form to input the task description

    this.taskForm = this.formBuilder.group({
      description: ['', [Validators.minLength(5), Validators.required]],
    });
  }

  ngOnInit() {}

  // Function to add a new task

  addTask() {
    const taskDescription = this.taskForm.get('description')?.value;
    if (!taskDescription) {
      return;
    } else {
      // Emit the event to add the task
      this.taskAdded.emit(taskDescription);
      // Reset the form and close the modal
      this.taskForm.reset();
      this.closeModal();
    }
  }

  // Function to close the modal

  closeModal() {
    // Emit the event to close the modal
    this.switchModalService.$modal.emit(false);
  }
}
