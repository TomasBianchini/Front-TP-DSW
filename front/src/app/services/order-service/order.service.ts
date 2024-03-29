import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/Entities/Order.js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(`${this.url}/order`);
  }

  findOne(id: string) {
    return this.http.get(`${this.url}/order/${id}`);
  }

  add(order: Order) {
    return this.http.post(`${this.url}/order`, order);
  }

  update(id: string, order: Order) {
    return this.http.put(`${this.url}/order/${id}`, order);
  }

  remove(id: string) {
    return this.http.delete(`${this.url}/order/${id}`);
  }
}
