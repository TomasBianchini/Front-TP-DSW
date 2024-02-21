export interface Discount {
  _id: string;
  discount: number;
  state: 'Active' | 'Archived';

  created_at: Date;
  updated_at: Date;
}
