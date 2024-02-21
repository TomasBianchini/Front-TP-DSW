export interface PaymentType {
  payment_type: string;
  state: 'Active' | 'Archived';
  created_at: Date;
  updated_at: Date;
  _id: string;
}
