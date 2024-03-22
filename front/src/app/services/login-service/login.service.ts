import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = environment.url;

  constructor(private httpClient: HttpClient) {}

  login(user: any) {
    return this.httpClient.post(`${this.url}/login`, user);
  }

  loggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    const decoded = jwtDecode(token);

    if (!decoded.exp || decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      return false;
    }
    return true;
  }

  logOut() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
