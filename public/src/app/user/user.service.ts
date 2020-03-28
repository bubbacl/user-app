import { Injectable } from '@angular/core';
import { User } from './user';

import 'rxjs';
import 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  create(user: User) {
    return this.http.post('/users', user);
  }

  destroy(user: User) {
    return this.http.delete('/users/' + user._id);
  }

  update(user: User) {
    return this.http.put('/users/' + user._id, user);
  }

  getUsers() {
    return this.http.get('/users');
  }

  getUser(user: User) {
    return this.http.get('/users/' + user._id);
  }

}
