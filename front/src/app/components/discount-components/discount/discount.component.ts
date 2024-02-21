import { Component, OnInit } from '@angular/core';
import { Discount } from 'src/app/Entities/Discount.js';
import { DiscountService } from 'src/app/services/discount-service/discount.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css'],
})
export class DiscountComponent implements OnInit {
  constructor(private discountService: DiscountService) {}
  discounts: Discount[] = [];

  ngOnInit() {
    this.discountService.findAll().subscribe({
      error: (res: any) => console.log(res.message),
      next: (res: any) => (this.discounts = res.data),
    });
  }
}
