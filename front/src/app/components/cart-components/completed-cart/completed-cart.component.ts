import { Component } from '@angular/core';
import { Cart } from 'src/app/Entities/Cart.js';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { NotificationService } from 'src/app/services/notication-service/notification.service';

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
  cart!: Cart[];
  user_id!: string;
  ngOnInit() {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      const user = JSON.parse(userDataString);
      this.cartService.findAll({ id: user.id, state: 'Completed' }).subscribe({
        next: (res: any) => (this.cart = res.data),
      });
    }
  }
}
