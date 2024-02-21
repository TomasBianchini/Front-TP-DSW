export interface Payment_type {
  payment_type: string;
  state: 'Active' | 'Archived';
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}
