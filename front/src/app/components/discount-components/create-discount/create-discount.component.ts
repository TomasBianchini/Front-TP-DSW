import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/Entities/Category';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { DiscountService } from 'src/app/services/discount-service/discount.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

@Component({
  selector: 'app-create-discount',
  templateUrl: './create-discount.component.html',
})
export class CreateDiscountComponent {
  discountForm!: FormGroup;
  categories!: Category[];

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private discountService: DiscountService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.findAll().subscribe({
      next: (res: any) => (this.categories = res.data),
      error: (res: any) => this.notificationService.showError(res.message),
    });

    this.discountForm = this.formBuilder.group({
      value: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(100),
      ]),
      state: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(Active|Archived)$/),
      ]),
      category: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.discountForm.valid) {
      console.log(this.discountForm.value);
      this.discountService.add(this.discountForm.value).subscribe({
        error: (res: any) =>
          this.notificationService.showError(res.error.message),
        complete: () => {
          this.notificationService.showSuccess('Discount added successfully');
          this.router.navigate(['/discount']);
        },
      });
    } else {
      this.notificationService.showError('Invalid form data');
    }
  }
}
