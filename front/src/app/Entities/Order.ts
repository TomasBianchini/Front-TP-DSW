import { Cart } from './Cart.js';
import { Product } from './Product.js';

export interface Order {
  id: string;
  product: Product;
  quantity: number;
  subtotal: number;
  createdAt: Date;
  updatedAt: Date;
  cart: Cart;
}
