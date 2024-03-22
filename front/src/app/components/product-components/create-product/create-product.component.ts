import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/Entities/Category';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent {
  constructor(
    private notificationService: NotificationService,
    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) {}

  productForm!: FormGroup;
  categories!: Category[];
  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(150)]],
      price: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required, Validators.maxLength(150)]],
      img_url: ['', [Validators.required, Validators.maxLength(150)]],
      state: [
        '',
        [Validators.required, Validators.pattern(/^(Active|Archived)$/)],
      ],
      category: ['', [Validators.required, Validators.maxLength(150)]],
      seller: [''],
    });

    this.categoryService.findAll().subscribe({
      next: (res: any) => (this.categories = res.data),
      error: (res: any) =>
        this.notificationService.showError(res.error.message),
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const userDataString = localStorage.getItem('user');
      if (userDataString) {
        const user = JSON.parse(userDataString);
        this.productForm.value.seller = user.id;
        this.productService.add(this.productForm.value).subscribe({
          error: (res: any) =>
            this.notificationService.showError(res.error.message),
          complete: () => {
            this.notificationService.showSuccess(
              'Product created successfully'
            );
            this.router.navigate(['/product/sellerProducts']);
          },
        });
      } else {
        this.notificationService.showError('Invalid user');
      }
    } else {
      this.notificationService.showError('Invalid form data');
    }
  }
}
