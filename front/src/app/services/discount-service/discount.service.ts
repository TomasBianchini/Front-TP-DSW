import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Discount } from '../../Entities/Discount.js';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DiscountService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  findAll() {
    const params = new HttpParams().set('state', 'Active');
    return this.http.get(`${this.url}/discount`, { params });
  }

  findOne(id: string) {
    return this.http.get(`${this.url}/discount/${id}`);
  }

  add(discount: Discount) {
    return this.http.post(`${this.url}/discount`, discount);
  }

  update(id: string, discount: Discount) {
    return this.http.put(`${this.url}/discount/${id}`, discount);
  }

  remove(id: string) {
    return this.http.delete(`${this.url}/discount/${id}`);
  }
}
