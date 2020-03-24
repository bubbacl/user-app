import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers()
      .then(user => this.users = this.users);
  }

  create(user: User) {
    this.users.push(user);
  }

  destroy(user: User) {
    const i = this.users.indexOf(user);
    this.users.splice(i, 1);
  }

  update(users) {
    console.log(users);
    const i = this.users.indexOf(users.original);
    this.users[i] = users.edited;
  }
}
