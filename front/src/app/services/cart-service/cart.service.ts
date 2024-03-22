import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from 'src/app/Entities/Cart.js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  findAll(filter: any) {
    let params = new HttpParams();
    if (filter.state) {
      params = params.set('state', filter.state);
    }
    if (filter.user) {
      params = params.set('user', filter.user);
    }
    return this.http.get(`${this.url}/cart`, { params });
  }

  findOne(id: string) {
    return this.http.get(`${this.url}/order/${id}`);
  }

  add(cart: Cart) {
    return this.http.post(`${this.url}/cart`, cart);
  }

  update(id: string, cart: Cart) {
    return this.http.put(`${this.url}/cart/${id}`, cart);
  }

  remove(id: string) {
    return this.http.delete(`${this.url}/cart/${id}`);
  }

  cancel(cart: Cart) {
    return this.http.patch(`${this.url}/cart/cancelCart/${cart.id}`, cart);
  }
}
