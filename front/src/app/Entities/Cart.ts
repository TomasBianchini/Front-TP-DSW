import { User } from './User.js';
import { Shipping } from './Shipping.js';
import { Payment_type } from './Payment_type.js';

export interface Cart {
  id: string;
  shipping: any;
  total: number;
  payment_type: any;
  state: 'Completed' | 'Pending' | 'Canceled';
  createdAt: Date;
  updatedAt: Date;
  user: User;
  orders: any[];
}
