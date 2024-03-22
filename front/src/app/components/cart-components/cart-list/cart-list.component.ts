import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
})
export class CartListComponent {
  showCompleted: boolean = false;

  showPending() {
    this.showCompleted = false;
  }

  showCompletedBuys() {
    this.showCompleted = true;
  }
}
