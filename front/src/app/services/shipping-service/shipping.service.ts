import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shipping } from 'src/app/Entities/Shipping.js';

@Injectable({
  providedIn: 'root',
})
export class ShippingService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(`${this.url}/shipping`);
  }

  findOne(id: string) {
    return this.http.get(`${this.url}/shipping/${id}`);
  }

  add(shipping: Shipping) {
    return this.http.post(`${this.url}/shipping`, shipping);
  }

  update(id: string, shipping: Shipping) {
    return this.http.put(`${this.url}/shipping/${id}`, shipping);
  }

  remove(id: string) {
    return this.http.delete(`${this.url}/shipping/${id}`);
  }
}
