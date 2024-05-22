import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SwitchModalService {
  constructor() {}

  // Event to emit the modal status

  $modal = new EventEmitter<any>();
}
