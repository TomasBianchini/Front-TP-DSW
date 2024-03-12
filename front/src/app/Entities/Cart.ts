import { User } from './User.js';

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
  canCancel: boolean | undefined;
}
