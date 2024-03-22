import { Component, OnInit } from '@angular/core';
import { Discount } from 'src/app/Entities/Discount.js';
import { DiscountService } from 'src/app/services/discount-service/discount.service';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
})
export class DiscountComponent implements OnInit {
  constructor(
    private discountService: DiscountService,
    private notificationService: NotificationService
  ) {}
  discounts: Discount[] = [];
  displayedColumns: string[] = ['value', 'category', 'state', 'edit', 'delete'];
  ngOnInit() {
    this.discountService.findAll().subscribe({
      error: (res: any) =>
        this.notificationService.showError(res.error.message),
      next: (res: any) => (this.discounts = res.data),
    });
  }

  onDelete(id: string) {
    this.discountService.remove(id).subscribe({
      next: (res: any) => this.notificationService.showSuccess(res.message),
      error: (res: any) =>
        this.notificationService.showError(res.error.message),
      complete: () => window.location.reload(),
    });
  }
}
