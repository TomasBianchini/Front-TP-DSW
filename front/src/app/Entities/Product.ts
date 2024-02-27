import { Category } from './Category.js';
import { Seller } from './Seller.js';
import { Review } from './Review.js';
export interface Product {
  _id: string;
  id: string;
  name: string;
  price: number;
  priceWithDiscount: number;
  stock: number;
  description: string;
  img_url: string;
  state: 'Active' | 'Archived';
  category: Category;
  seller: Seller;
  rating: number;
  reviews: Review[];
  createdAt: Date;
  updatedAt: Date;
}
