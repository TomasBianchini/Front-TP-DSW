import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Entities/Cart.js';
import { User } from 'src/app/Entities/User.js';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { LoginService } from 'src/app/services/login-service/login.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private cartService: CartService
  ) {}
  user!: User;
  cart!: Cart[];
  ngOnInit(): void {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      this.user = JSON.parse(userDataString);
    }

    this.cartService
      .findAll({ user: this.user.id, state: 'Pending' })
      .subscribe({
        next: (res: any) => {
          this.cart = res.data;
        },
        complete: () => {
          this.showPendingCart();
        },
      });
  }

  signOut() {
    this.loginService.logOut();
    this.router.navigate(['/login']);
  }
  isAdmin(): boolean {
    return this.user.type === 'Admin';
  }
  isSeller(): boolean {
    return this.user.type === 'Seller';
  }

  showPendingCart(): boolean {
    return (
      this.cart && this.cart.length > 0 && this.cart[0].state === 'Pending'
    );
  }
}
