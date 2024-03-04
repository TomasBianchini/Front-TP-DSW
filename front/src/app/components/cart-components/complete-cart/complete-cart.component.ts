import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Entities/Cart';
import { Payment_type } from 'src/app/Entities/Payment_type';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { NotificationService } from 'src/app/services/notication-service/notification.service';
import { OrderService } from 'src/app/services/order-service/order.service';
import { PaymentTypeService } from 'src/app/services/payment_type-service/payment-type.service';

@Component({
  selector: 'app-complete-cart',
  templateUrl: './complete-cart.component.html',
  styleUrls: ['./complete-cart.component.css'],
})
export class CompleteCartComponent {
  constructor(
    private notificationService: NotificationService,
    private router: Router,
    private cartService: CartService,
    private orderService: OrderService,
    private paymentTypeService: PaymentTypeService
  ) {}
  cart!: Cart;
  payment_types!: Payment_type[];
  ngOnInit() {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      const user = JSON.parse(userDataString);
      this.cartService.findAll({ user: user.id, state: 'Pending' }).subscribe({
        next: (res: any) => {
          this.cart = res.data[0];
          this.cart.total = 0;
          this.cart.orders.forEach((order) => {
            if (order.product.category && order.product.category.discounts) {
              order.product.priceWithDiscount = parseFloat(
                (
                  order.product.price -
                  order.product.price *
                    (order.product.category.discounts[0].value / 100)
                ).toFixed(2)
              );
            }
            order.subtotal = order.product.priceWithDiscount
              ? order.product.priceWithDiscount * order.quantity
              : order.product.price * order.quantity;
            this.cart.total += order.subtotal;
          });
        },
        error: (res: any) => {
          this.notificationService.showError(res.error.message);
        },
      });
    }
    this.paymentTypeService.findAll().subscribe({
      next: (res: any) => {
        this.payment_types = res.data;
      },
    });
  }

  removeOrder(id: string) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this order?'
    );
    if (confirmed) {
      this.orderService.remove(id).subscribe({
        next: (res: any) => {
          this.notificationService.showSuccess(res.message);
          window.location.reload();
        },
        error: (res: any) => {
          this.notificationService.showError(res.error.message);
        },
      });
    }
  }

  incrementQuantity(id: string) {
    this.cart.total = 0;
    this.cart.orders.forEach((order) => {
      if (order.id === id && order.quantity < order.product.stock) {
        order.quantity++;
        order.subtotal = parseFloat(
          (order.product.priceWithDiscount
            ? order.product.priceWithDiscount * order.quantity
            : order.product.price * order.quantity
          ).toFixed(2)
        );
      }
      this.cart.total += order.subtotal;
    });
  }

  decrermentQuantity(id: string) {
    this.cart.total = 0;
    this.cart.orders.forEach((order) => {
      if (order.id === id && order.quantity > 1) {
        order.quantity--;
        order.subtotal = parseFloat(
          (order.product.priceWithDiscount
            ? order.product.priceWithDiscount * order.quantity
            : order.product.price * order.quantity
          ).toFixed(2)
        );
      }
      this.cart.total += order.subtotal;
    });
  }

  completeCart() {
    this.cart.state = 'Completed';
    this.notificationService.showSuccess('We are working on it!');
    // this.cartService.update(this.cart.id, this.cart).subscribe({
    //   next: (res: any) => {
    //     this.notificationService.showSuccess(res.message);
    //     this.router.navigate(['/']);
    //   },
    //   error: (res: any) => {
    //     this.notificationService.showError(res.error.message);
    //   },
    // });
  }
}
