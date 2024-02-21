import { Component, OnInit } from '@angular/core';
import { Discount } from 'src/app/Entities/Discount.js';
import { DiscountService } from 'src/app/services/discount-service/discount.service';
import { NotificationService } from 'src/app/services/notication-service/notification.service.js';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css'],
})
export class DiscountComponent implements OnInit {
  constructor(
    private discountService: DiscountService,
    private notificationService: NotificationService
  ) {}
  discounts: Discount[] = [];
  displayedColumns: string[] = ['value', 'category', 'state'];
  ngOnInit() {
    this.discountService.findAll().subscribe({
      error: (res: any) => this.notificationService.showError(res.message),
      next: (res: any) => (this.discounts = res.data),
    });
  }
}
