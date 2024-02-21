import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Discount } from '../../Entities/Discount.js';
@Injectable({
  providedIn: 'root',
})
export class DiscountService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(`${this.url}/discount`);
  }

  findOne(id: number) {
    return this.http.get(`${this.url}/discount/${id}`);
  }

  add(discount: Discount) {
    return this.http.post(`${this.url}/discount`, discount);
  }

  update(discount: Discount) {
    return this.http.put(`${this.url}/discount/${discount._id}`, discount);
  }

  remove(id: number) {
    return this.http.delete(`${this.url}/discount/${id}`);
  }
}
