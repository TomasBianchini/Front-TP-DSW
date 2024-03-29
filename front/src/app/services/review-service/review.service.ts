import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from 'src/app/Entities/Review.js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  url = environment.url;

  constructor(private http: HttpClient) {}
  findAll() {
    return this.http.get(`${this.url}/review`);
  }
  findOne(id: string) {
    return this.http.get(`${this.url}/review/${id}`);
  }
  add(review: Review) {
    return this.http.post(`${this.url}/review`, review);
  }
  update(id: string, review: Review) {
    return this.http.put(`${this.url}/review/${id}`, review);
  }
  remove(id: string) {
    return this.http.delete(`${this.url}/review/${id}`);
  }
}
