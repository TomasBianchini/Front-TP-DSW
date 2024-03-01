import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Entities/Product.js';
import { NotificationService } from 'src/app/services/notication-service/notification.service';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.css'],
})
export class SellerProductsComponent {
  constructor(
    private notificationService: NotificationService,
    private router: Router,
    private productService: ProductService
  ) {}
  products!: Product[];
  ngOnInit() {
    this.productService.findAll().subscribe({
      error: (res: any) =>
        this.notificationService.showError(res.error.message),
      next: (res: any) => {
        this.products = res.data;
        this.products.forEach((product) => {
          if (product.category && product.category.discounts.length > 0) {
            product.priceWithDiscount = parseFloat(
              (
                product.price -
                product.price * (product.category.discounts[0].value / 100)
              ).toFixed(2)
            );
          }
        });
      },
    });
  }
  onDelete(id: string) {
    this.productService.remove(id).subscribe({
      next: (res: any) => this.notificationService.showSuccess(res.message),
      error: (res: any) =>
        this.notificationService.showError(res.error.message),
      complete: () => window.location.reload(),
    });
  }
}
