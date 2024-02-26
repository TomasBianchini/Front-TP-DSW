import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/Entities/Product.js';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  findAll() {
    return this.http.get(`${this.url}/product`);
  }
  findOne(id: string) {
    return this.http.get(`${this.url}/product/${id}`);
  }
  add(product: Product) {
    return this.http.post(`${this.url}/product`, product);
  }
  update(id: string, product: Product) {
    return this.http.put(`${this.url}/product/${id}`, product);
  }
  remove(id: string) {
    return this.http.delete(`${this.url}/product/${id}`);
  }
}
