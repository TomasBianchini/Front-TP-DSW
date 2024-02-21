import { User } from './User';
import { Product } from './Product';
export interface Seller extends User {
  shop_name: string;
  cuil: string;
  cbu: string;
  products: Product[];
}
