import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentTypeService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(`${this.url}/payment_type`);
  }

  findOne(id: number) {
    return this.http.get(`${this.url}/payment_type/${id}`);
  }

  add(payment_type: any) {
    return this.http.post(`${this.url}/payment_type`, payment_type);
  }

  update(payment_type: any) {
    return this.http.put(
      `${this.url}/payment_type/${payment_type.id}`,
      payment_type
    );
  }

  remove(id: number) {
    return this.http.delete(`${this.url}/payment_type/${id}`);
  }
}
