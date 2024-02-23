export interface Discount {
  id: string;
  value: number;
  state: 'Active' | 'Archived';
  createdAt: Date;
  updatedAt: Date;
}
