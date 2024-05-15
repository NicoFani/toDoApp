import { Component } from '@angular/core';
import { SwitchModalService } from '../../services/switch-modal.service';

@Component({
  selector: 'app-new-task-modal',
  standalone: true,
  imports: [],
  templateUrl: './new-task-modal.component.html',
  styleUrl: './new-task-modal.component.css',
})
export class NewTaskModalComponent {
  constructor(private switchModalService: SwitchModalService) {}

  ngOnInit() {}

  closeModal() {
    this.switchModalService.$modal.emit(false);
  }
}
