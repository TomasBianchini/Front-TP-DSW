import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category-components/category/category.component.js';
import { DiscountComponent } from './components/discount-components/discount/discount.component.js';
import { PaymentTypeComponent } from './components/payment_type-components/payment-type/payment-type.component.js';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    DiscountComponent,
    PaymentTypeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
