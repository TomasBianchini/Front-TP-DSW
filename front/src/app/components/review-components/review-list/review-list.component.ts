import { Component, Input } from '@angular/core';
import { Review } from 'src/app/Entities/Review.js';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css'],
})
export class ReviewListComponent {
  constructor() {}
  @Input()
  reviews!: Review[];
}
