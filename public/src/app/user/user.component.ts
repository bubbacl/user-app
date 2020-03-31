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
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
        .subscribe((user) => {
          this.users = this.users;
        });
  }

  create(user: User) {
    this.users.push(user);
      /*.then(status => this.getUsers());*/
      /*.catch(err => console.log(err));*/

  }

  destroy(user: User) {
    this.userService.destroy(user);
    /*.then(status => this.getUsers());*/
    /*.catch(err => console.log(err));*/
  }

  update(user) {
    this.userService.update(user);
    /*.then(status => this.getUsers());*/
    /*.catch(err => console.log(err));*/
  }
}
