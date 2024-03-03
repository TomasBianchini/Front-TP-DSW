import { Cart } from './Cart.js';
import { Product } from './Product.js';

export interface Order {
  id: string | undefined;
  product: string | Product;
  quantity: number;
  subtotal: number;
  user: string | null;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  cart: Cart | undefined;
}
