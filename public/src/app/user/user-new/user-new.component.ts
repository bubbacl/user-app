import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

  @Output() createNewUserEvent = new EventEmitter();
  newUser = new User;
  constructor() { }

  ngOnInit(): void {
  }

  create() {
    this.createNewUserEvent.emit(this.newUser);
    this.newUser = new User();
  }
}
