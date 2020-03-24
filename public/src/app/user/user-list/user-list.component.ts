import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users;
  @Output() destroyUserEvent = new EventEmitter();
  @Output() updateUserEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  destroy(user: User) {
    const response = confirm('¿Deseas eliminar al usuario?')
    if (response) {
      this.destroyUserEvent.emit(user);
    }
  }

  update(users) {
    this.updateUserEvent.emit(users);
  }
}
