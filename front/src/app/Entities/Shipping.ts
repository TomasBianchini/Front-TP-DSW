export interface Shipping {
  id: string;
  shipmethod: string;
  price: number;
  state: 'Active' | 'Archived';
}
