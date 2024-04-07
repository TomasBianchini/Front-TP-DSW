import { of } from 'rxjs';
import { Order } from 'src/app/Entities/Order.js';
export class OrderServiceMock {
  add(order: Order) {
    return of({ message: 'Order created', data: order });
  }
}
