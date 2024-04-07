import { Product } from './Product.js';
export interface Review {
  rating: number;
  comment: string;
  state: 'Active' | 'Archived';
  product: Product | string;
  createdAt: Date;
  updatedAt: Date;
}
