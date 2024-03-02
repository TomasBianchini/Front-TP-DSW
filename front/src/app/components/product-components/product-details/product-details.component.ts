import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Entities/Product';
import { NotificationService } from 'src/app/services/notication-service/notification.service';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  constructor(
    private notificationService: NotificationService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  product!: Product;
  productId!: string;
  quantity = 1;
  ngOnInit() {
    this.productId = this.route.snapshot.params['id'];
    this.productService.findOne(this.productId).subscribe({
      error: (res: any) =>
        this.notificationService.showError(res.error.message),
      next: (res: any) => {
        this.product = res.data;
        if (this.product.reviews.length > 0) {
          this.product.rating = parseFloat(
            (
              this.product.reviews.reduce(
                (acc, review) => acc + review.rating,
                0
              ) / this.product.reviews.length
            ).toFixed(2)
          );
        }
        if (this.product.category && this.product.category.discounts) {
          this.product.priceWithDiscount = parseFloat(
            (
              this.product.price -
              this.product.price *
                (this.product.category.discounts[0].value / 100)
            ).toFixed(2)
          );
        }
      },
    });
  }

  incrementQuantity() {
    if (this.quantity < this.product.stock) this.quantity += 1;
  }
  decrementQuantity() {
    if (this.quantity > 1) this.quantity--;
  }
  addToCart() {
    this.notificationService.showSuccess('We are working on it!:)');
  }
}
