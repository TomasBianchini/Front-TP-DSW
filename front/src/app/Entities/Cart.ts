import { User } from './User.js';
import { Shipping } from './Shipping.js';
import { Payment_type } from './Payment_type.js';

export interface Cart {
  id: string;
  shipping: Shipping;
  total: number;
  payment_type: Payment_type;
  state: 'Completed' | 'Pending' | 'Canceled';
  createdAt: Date;
  updatedAt: Date;
  user: User;
  orders: any[];
}
