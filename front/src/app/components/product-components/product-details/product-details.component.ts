import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/Entities/Order.js';
import { Product } from 'src/app/Entities/Product';
import { User } from 'src/app/Entities/User.js';
import { NotificationService } from '../../../services/notification-service/notification.service';
import { OrderService } from '../../../services/order-service/order.service';
import { ProductService } from '../../..//services/product-service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  constructor(
    private notificationService: NotificationService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}
  order!: Order;
  product!: Product;
  productId!: string;
  quantity = 1;
  user!: User;

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
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      this.user = JSON.parse(userDataString);
    }
  }

  incrementQuantity() {
    if (this.quantity < this.product.stock) this.quantity += 1;
  }
  decrementQuantity() {
    if (this.quantity > 1) this.quantity--;
  }
  addToCart() {
    if (this.quantity < this.product.stock) {
      this.order = {
        product: this.product._id,
        quantity: this.quantity,
        user: this.user.id,
        subtotal: this.product.priceWithDiscount
          ? this.product.priceWithDiscount * this.quantity
          : this.product.price * this.quantity,
        cart: undefined,
        createdAt: undefined,
        updatedAt: undefined,
        id: undefined,
      };
      this.orderService.add(this.order).subscribe({
        next: (res: any) => {
          this.notificationService.showSuccess(res.message);
        },
        error: (res: any) => {
          this.notificationService.showError(res.error.message);
        },
      });
    } else {
      this.notificationService.showError(
        'The quantity is greater than the stock'
      );
    }
  }
}
