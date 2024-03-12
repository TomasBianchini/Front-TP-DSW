import { Component } from '@angular/core';
import { Cart } from 'src/app/Entities/Cart.js';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

@Component({
  selector: 'app-completed-cart',
  templateUrl: './completed-cart.component.html',
  styleUrls: ['./completed-cart.component.css'],
})
export class CompletedCartComponent {
  constructor(
    private notificationService: NotificationService,
    private cartService: CartService
  ) {}
  carts!: Cart[];
  user_id!: string;
  addProductReview!: string;
  ngOnInit() {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      const user = JSON.parse(userDataString);
      this.cartService.findAll({ id: user.id, state: 'Completed' }).subscribe({
        next: (res: any) => {
          this.carts = res.data;
          this.carts.sort((a, b) => {
            return a.updatedAt > b.updatedAt
              ? -1
              : a.updatedAt < b.updatedAt
              ? 1
              : 0;
          });
          const currentDate = new Date();
          this.carts.forEach((cart) => {
            const cartUpdatedAt = new Date(cart.updatedAt);
            const timeDifference =
              currentDate.valueOf() - cartUpdatedAt.valueOf();
            const hoursDifference = timeDifference / (1000 * 3600);
            if (hoursDifference <= cart.shipping.cancellationDeadline) {
              cart.canCancel = true;
            }
          });
        },
      });
    }
  }

  review: boolean = false;
  showReview(): boolean {
    return this.review;
  }

  addReview(product: string) {
    this.addProductReview = product;
    this.review = !this.review;
    console.log(this.review);
  }
  cancelCart(cart: Cart) {
    console.log(cart.id);
    this.cartService.cancel(cart).subscribe({
      next: (res: any) => this.notificationService.showSuccess(res.message),
      error: (res: any) => this.notificationService.showError(res.message),
      complete: () => window.location.reload(),
    });
  }
}
