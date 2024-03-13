import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) {}

  login(user: any) {
    return this.httpClient.post(`${this.url}/login`, user);
  }

  loggedIn(): boolean {
    const token = localStorage.getItem('token');
    const tokenExpiracion = localStorage.getItem('tokenExpiration');
    if (!token || !tokenExpiracion) {
      return false;
    }
    const fechaActual = new Date().getTime();
    if (fechaActual > parseInt(tokenExpiracion)) {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiration');
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
