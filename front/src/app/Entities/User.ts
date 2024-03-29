export interface User {
  id: string;
  user_name: string;
  email: string;
  password: string;
  address: string;
  type: 'Admin' | 'User' | 'Seller';
  state: 'Active' | 'Archived';
  createdAt: Date;
  updatedAt: Date;
}
