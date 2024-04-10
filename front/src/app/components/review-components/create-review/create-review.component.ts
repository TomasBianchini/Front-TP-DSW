import { Component, Input, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ReviewService } from 'src/app/services/review-service/review.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css'],
})
export class CreateReviewComponent implements OnInit {
  reviewForm!: FormGroup;
  @Input() product!: string;
  showModal: boolean = true;
  ratingScores = [1, 2, 3, 4, 5];
  constructor(
    private formBuilder: FormBuilder,
    private reviewService: ReviewService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.showModal = true;
    this.reviewForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.maxLength(150)]],
      rating: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
      product: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.reviewForm.patchValue({ product: this.product });
    if (this.reviewForm.valid) {
      this.reviewService.add(this.reviewForm.value).subscribe({
        next: (res: any) => {
          this.notificationService.showSuccess('Review created successfully');
        },
        error: (error) => {
          this.notificationService.showError(
            `Failed to create review: ${error.error.message}`
          );
        },
        complete: () => {
          this.showModal = false;
        },
      });
    } else {
      this.notificationService.showError('Invalid form data');
    }
  }
  setRating(rating: number, event: Event) {
    event.preventDefault();
    this.reviewForm.patchValue({ rating });
  }
  closeReview() {
    this.showModal = false;
  }
}
