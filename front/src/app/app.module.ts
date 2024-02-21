import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category-components/category/category.component';
import { DiscountComponent } from './components/discount-components/discount/discount.component';
import { PaymentTypeComponent } from './components/payment_type-components/payment-type/payment-type.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    DiscountComponent,
    PaymentTypeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
