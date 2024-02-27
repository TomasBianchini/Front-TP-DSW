import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category-components/category/category.component';
import { DiscountComponent } from './components/discount-components/discount/discount.component';
import { PaymentTypeComponent } from './components/payment_type-components/payment-type/payment-type.component';
import { CreateCategoryComponent } from './components/category-components/create-category/create-category.component';
import { EditCategoryComponent } from './components/category-components/edit-category/edit-category.component';
import { EditDiscountComponent } from './components/discount-components/edit-discount/edit-discount.component';
import { CreateDiscountComponent } from './components/discount-components/create-discount/create-discount.component';
import { CreatePaymentTypeComponent } from './components/payment_type-components/create-payment-type/create-payment-type.component';
import { EditPaymentTypeComponent } from './components/payment_type-components/edit-payment-type/edit-payment-type.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { EditProductComponent } from './components/product-components/edit-product/edit-product.component';
import { CreateProductComponent } from './components/product-components/create-product/create-product.component';
import { ListProductComponent } from './components/product-components/list-product/list-product.component';
import { SellerProductsComponent } from './components/product-components/seller-products/seller-products.component';
import { ProductDetailsComponent } from './components/product-components/product-details/product-details.component';
import { ReviewListComponent } from './components/review-components/review-list/review-list.component';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

//guards
import { AuthGuard } from './guards/auth-guard/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor-service/token-interceptor.service';
import { CreateReviewComponent } from './components/review-components/create-review/create-review.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    DiscountComponent,
    PaymentTypeComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    EditDiscountComponent,
    CreateDiscountComponent,
    CreatePaymentTypeComponent,
    EditPaymentTypeComponent,
    NavBarComponent,
    LoginComponent,
    SingUpComponent,
    EditProductComponent,
    CreateProductComponent,
    ListProductComponent,
    SellerProductsComponent,
    ProductDetailsComponent,
    ReviewListComponent,
    CreateReviewComponent,
  ],
  imports: [
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
