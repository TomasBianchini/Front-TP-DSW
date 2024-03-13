import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/Entities/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  findAll() {
    // const params = new HttpParams().set('state', 'Active');
    return this.http.get(`${this.url}/user`);
  }

  findOne(id: string) {
    return this.http.get(`${this.url}/user/${id}`);
  }

  add(user: User) {
    return this.http.post(`${this.url}/user`, user);
  }

  update(id: string, user: User) {
    return this.http.put(`${this.url}/user/${id}`, user);
  }

  remove(id: string) {
    return this.http.delete(`${this.url}/user/${id}`);
  }
}
