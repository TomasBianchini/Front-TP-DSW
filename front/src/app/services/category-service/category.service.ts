import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/Entities/Category.js';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(`${this.url}/category`);
  }

  findOne(id: number) {
    return this.http.get(`${this.url}/category/${id}`);
  }

  add(category: Category) {
    return this.http.post(`${this.url}/category`, category);
  }

  update(category: Category) {
    return this.http.put(`${this.url}/category/${category._id}`, category);
  }

  remove(id: number) {
    return this.http.delete(`${this.url}/category/${id}`);
  }
}
