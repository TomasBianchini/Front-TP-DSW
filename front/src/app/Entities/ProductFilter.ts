export interface ProductFilter {
  category?: string;
  seller?: string;
  stock?: number;
  state?: 'Active' | 'Archived';
}
