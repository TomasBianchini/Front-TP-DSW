import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seller } from 'src/app/Entities/Seller';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(`${this.url}/seller`);
  }
  findOne(id: string) {
    return this.http.get(`${this.url}/seller/${id}`);
  }
  add(seller: Seller) {
    return this.http.post(`${this.url}/seller`, seller);
  }
  update(id: string, seller: Seller) {
    return this.http.put(`${this.url}/seller/${id}`, seller);
  }
  remove(id: string) {
    return this.http.delete(`${this.url}/seller/${id}`);
  }
}
