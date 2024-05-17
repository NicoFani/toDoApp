import { Component } from '@angular/core';
import { SwitchModalService } from '../../services/switch-modal.service';
import {
  FormBuilder,
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
  constructor(
    private switchModalService: SwitchModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  taskForm = this.formBuilder.group({
    taskDescription: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(100)],
    ],
  });

  closeModal() {
    this.switchModalService.$modal.emit(false);
  }
}
