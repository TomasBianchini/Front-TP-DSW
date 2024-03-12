import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Entities/Category.js';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent {
  constructor(
    private notificationService: NotificationService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) {}

  productForm!: FormGroup;
  product_id!: string;
  categories!: Category[];
  ngOnInit() {
    this.product_id = this.route.snapshot.params['id'];

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
      seller: ['', [Validators.required, Validators.maxLength(150)]],
    });

    this.productService.findOne(this.product_id).subscribe({
      next: (res: any) => {
        this.productForm.patchValue(res.data);
      },
      error: (res: any) =>
        this.notificationService.showError(res.error.message),
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
        this.productService
          .update(this.product_id, this.productForm.value)
          .subscribe({
            error: (res: any) =>
              this.notificationService.showError(res.error.message),
            complete: () => {
              this.notificationService.showSuccess(
                'Product updated successfully'
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
