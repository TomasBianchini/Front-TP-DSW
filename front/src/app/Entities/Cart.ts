import { User } from './User.js';
import { Order } from './Order.js';

export interface Cart {
  id: string;
  shipment: string;
  total: number;
  state: 'Completed' | 'Pending' | 'Canceled';
  createdAt: Date;
  updatedAt: Date;
  user: User;
  orders: any[];
}
