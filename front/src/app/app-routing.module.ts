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
import { AdminGuard } from './guards/auth-guard/admin-guard';
import { SellerGuard } from './guards/auth-guard/seller-guard';
import { ListProductComponent } from './components/product-components/list-product/list-product.component';
import { CreateProductComponent } from './components/product-components/create-product/create-product.component';
import { EditProductComponent } from './components/product-components/edit-product/edit-product.component';
import { SellerProductsComponent } from './components/product-components/seller-products/seller-products.component';
import { ProductDetailsComponent } from './components/product-components/product-details/product-details.component';
import { ShippingComponent } from './components/shipping-components/shipping/shipping.component';
import { CreateShippingComponent } from './components/shipping-components/create-shipping/create-shipping.component';
import { EditShippingComponent } from './components/shipping-components/edit-shipping/edit-shipping.component';
import { CartListComponent } from './components/cart-components/cart-list/cart-list.component';
import { CreateReviewComponent } from './components/review-components/create-review/create-review.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'category',
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: '', component: CategoryComponent },
      { path: 'create', component: CreateCategoryComponent },
      { path: 'edit/:id', component: EditCategoryComponent },
    ],
  },
  {
    path: 'discount',
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: '', component: DiscountComponent },
      { path: 'create', component: CreateDiscountComponent },
      { path: 'edit/:id', component: EditDiscountComponent },
    ],
  },
  {
    path: 'payment_type',
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: '', component: PaymentTypeComponent },
      { path: 'create', component: CreatePaymentTypeComponent },
      { path: 'edit/:id', component: EditPaymentTypeComponent },
    ],
  },
  {
    path: 'shipping',
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: '', component: ShippingComponent },
      { path: 'create', component: CreateShippingComponent },
      { path: 'edit/:id', component: EditShippingComponent },
    ],
  },
  {
    path: 'review',
    component: CreateReviewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'product',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ListProductComponent },
      {
        path: 'create',
        component: CreateProductComponent,
        canActivate: [SellerGuard],
      },
      {
        path: 'edit/:id',
        component: EditProductComponent,
        canActivate: [SellerGuard],
      },
      {
        path: 'sellerProducts',
        component: SellerProductsComponent,
        canActivate: [SellerGuard],
      },
      { path: 'productDetails/:id', component: ProductDetailsComponent },
    ],
  },
  {
    path: 'cart',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'complete-cart',
        component: CartListComponent,
      },
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
