import { User } from './User.js';
import { Order } from './Order.js';

export interface Cart {
  id: string;
  shipment: string;
  state: 'Completed' | 'Pending' | 'Canceled';
  createdAt: Date;
  updatedAt: Date;
  user: User;
  order: Order[];
}
