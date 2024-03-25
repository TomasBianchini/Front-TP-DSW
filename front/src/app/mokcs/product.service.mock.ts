import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from 'src/app/Entities/Product.js';
import { ProductFilter } from 'src/app/Entities/ProductFilter.js';
import { environment } from '../../environments/environment';

export class ProductServiceMock {
  url = environment.url;

  constructor(private http: HttpClient) {}
  findAll(filter: ProductFilter = {}) {
    let params = new HttpParams();
    if (filter.state) {
      params = params.set('state', filter.state);
    }
    if (filter.category) {
      params = params.set('category', filter.category);
    }
    if (filter.seller) {
      params = params.set('seller', filter.seller);
    }
    return this.http.get(`${this.url}/product`, { params });
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
