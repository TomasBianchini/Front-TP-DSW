import { Discount } from './Discount.js';

export interface Category {
  id: string;
  discounts: Discount[];
  category: string;
  state: 'Active' | 'Archived';
  createdAt: Date;
  updatedAt: Date;
  expanded?: boolean;
}
