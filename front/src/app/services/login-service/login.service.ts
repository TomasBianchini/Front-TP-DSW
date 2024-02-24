import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  login(user: any) {
    return this.httpClient.post(`${this.url}/login`, user);
  }
}
