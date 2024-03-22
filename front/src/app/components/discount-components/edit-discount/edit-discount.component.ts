import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { DiscountService } from 'src/app/services/discount-service/discount.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { Category } from 'src/app/Entities/Category';
@Component({
  selector: 'app-edit-discount',
  templateUrl: './edit-discount.component.html',
})
export class EditDiscountComponent {
  constructor(
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private discountService: DiscountService,
    private categoryService: CategoryService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  discountId!: string;
  discountForm!: FormGroup;
  categories!: Category[];
  ngOnInit() {
    this.discountId = this.route.snapshot.params['id'];
    this.discountForm = this.formBuilder.group({
      value: [
        '',
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
      state: [
        '',
        [Validators.required, Validators.pattern(/^(Active|Archived)$/)],
      ],
      category_id: ['', [Validators.required]],
    });
    this.categoryService.findAll().subscribe({
      next: (res: any) => (this.categories = res.data),
      error: (res: any) =>
        this.notificationService.showError(res.error.message),
    });

    this.discountService.findOne(this.discountId).subscribe({
      next: (res: any) =>
        this.discountForm.setValue({
          value: res.data.value,
          state: res.data.state,
          category_id: res.data.category.id,
        }),
      error: (res: any) =>
        this.notificationService.showError(res.error.message),
    });
  }

  onSubmit() {
    if (this.discountForm.valid) {
      this.discountService
        .update(this.discountId, this.discountForm.value)
        .subscribe({
          error: (res: any) =>
            this.notificationService.showError(res.error.message),
          next: () => {
            this.notificationService.showSuccess(
              'Discount updated successfully'
            );
            this.router.navigate(['/discount']);
          },
        });
    } else {
      this.notificationService.showError('Invalid form data');
    }
  }
}
