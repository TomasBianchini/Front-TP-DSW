import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category-components/category/category.component';
import { DiscountComponent } from './components/discount-components/discount/discount.component';
import { PaymentTypeComponent } from './components/payment_type-components/payment-type/payment-type.component';
import { CreateCategoryComponent } from './components/category-components/create-category/create-category.component';
import { EditCategoryComponent } from './components/category-components/edit-category/edit-category.component';
import { CreateDiscountComponent } from './components/discount-components/create-discount/create-discount.component';
import { EditDiscountComponent } from './components/discount-components/edit-discount/edit-discount.component';
import { CreatePaymentTypeComponent } from './components/payment_type-components/create-payment-type/create-payment-type.component';
import { EditPaymentTypeComponent } from './components/payment_type-components/edit-payment-type/edit-payment-type.component';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';

import { AuthGuard } from './guards/auth-guard/auth.guard';
import { ListProductComponent } from './components/product-components/list-product/list-product.component';
import { CreateProductComponent } from './components/product-components/create-product/create-product.component';
import { EditProductComponent } from './components/product-components/edit-product/edit-product.component';
import { SellerProductsComponent } from './components/product-components/seller-products/seller-products.component';
import { ProductDetailsComponent } from './components/product-components/product-details/product-details.component';
const routes: Routes = [
  //TODO add guard Admin, Seller, User to the routes
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'category',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: CategoryComponent },
      { path: 'create', component: CreateCategoryComponent },
      { path: 'edit/:id', component: EditCategoryComponent },
    ],
  },
  {
    path: 'discount',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DiscountComponent },
      { path: 'create', component: CreateDiscountComponent },
      { path: 'edit/:id', component: EditDiscountComponent },
    ],
  },
  {
    path: 'payment_type',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: PaymentTypeComponent },
      { path: 'create', component: CreatePaymentTypeComponent },
      { path: 'edit/:id', component: EditPaymentTypeComponent },
    ],
  },
  {
    path: 'product',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ListProductComponent },
      { path: 'create', component: CreateProductComponent },
      { path: 'edit/:id', component: EditProductComponent },
      { path: 'sellerProducts', component: SellerProductsComponent },
      { path: 'productDetails/:id', component: ProductDetailsComponent },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SingUpComponent,
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
