import { Category } from './Category.js';
import { Seller } from './Seller.js';
import { Review } from './Review.js';
export interface Product {
  name: string;
  price: number;
  stock: number;
  description: string;
  img_url: string;
  state: 'Active' | 'Archived';
  category: Category;
  seller: Seller;
  reviews: Review[];
  createdAt: Date;
  updatedAt: Date;
}
