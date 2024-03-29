import { Discount } from './Discount.js';

export interface Category {
  _id: string;
  id: string;
  discounts: Discount[];
  category: string;
  state: 'Active' | 'Archived';
  createdAt: Date;
  updatedAt: Date;
  expanded: boolean;
}
