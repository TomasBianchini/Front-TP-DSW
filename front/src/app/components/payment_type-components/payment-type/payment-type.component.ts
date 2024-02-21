import { Component, OnInit } from '@angular/core';
import { Payment_type } from 'src/app/Entities/Payment_type';
import { PaymentTypeService } from 'src/app/services/payment_type-service/payment-type.service';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrls: ['./payment-type.component.css'],
})
export class PaymentTypeComponent implements OnInit {
  constructor(private payment_typeService: PaymentTypeService) {}

  payment_types: Payment_type[] = [];

  ngOnInit() {
    this.payment_typeService.findAll().subscribe({
      error: (res: any) => console.log(res.message),
      next: (res: any) => (this.payment_types = res.data),
    });
  }
}
