import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment_type } from 'src/app/Entities/Payment_type';
@Injectable({
  providedIn: 'root',
})
export class PaymentTypeService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(`${this.url}/payment_type`);
  }

  findOne(id: string) {
    return this.http.get(`${this.url}/payment_type/${id}`);
  }

  add(payment_type: Payment_type) {
    return this.http.post(`${this.url}/payment_type`, payment_type);
  }

  update(id: string, payment_type: Payment_type) {
    return this.http.put(`${this.url}/payment_type/${id}`, payment_type);
  }

  remove(id: string) {
    return this.http.delete(`${this.url}/payment_type/${id}`);
  }
}
