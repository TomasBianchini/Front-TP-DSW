import { Product } from './Product.js';
export interface Review {
  rating: number;
  comment: string;
  state: 'Active' | 'Archived';
  product: Product;
  createdAt: Date;
  updatedAt: Date;
}
