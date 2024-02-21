export interface Discount {
  _id: string;
  value: number;
  state: 'Active' | 'Archived';
  createdAt: Date;
  updatedAt: Date;
}
