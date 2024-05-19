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
  @Output() taskAdded = new EventEmitter<string>();
  taskForm: FormGroup = new FormGroup({});

  constructor(
    private switchModalService: SwitchModalService,
    private formBuilder: FormBuilder
  ) {
    this.taskForm = this.formBuilder.group({
      description: ['', [Validators.minLength(5), Validators.required]],
    });
  }

  ngOnInit() {}

  addTask() {
    const taskDescription = this.taskForm.get('description')?.value;
    if (!taskDescription) {
      return;
    } else {
      this.taskAdded.emit(taskDescription);
      this.taskForm.reset();
      this.closeModal();
    }
  }

  closeModal() {
    this.switchModalService.$modal.emit(false);
  }
}
