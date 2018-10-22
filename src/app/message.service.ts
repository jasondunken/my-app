import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: String[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
  //there was a weird bug where the heroes.component and the messages.component were not showing.
  //I commented out the following constructor to mirror the tutorial code and they started showing
  //I un-commented to try to reproduce the behavior but removing the comment did not revert the behavior?
  constructor() { }
}
