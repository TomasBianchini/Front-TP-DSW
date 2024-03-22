import { Component, OnInit } from '@angular/core';
import { Payment_type } from 'src/app/Entities/Payment_type';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { PaymentTypeService } from 'src/app/services/payment_type-service/payment-type.service';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
})
export class PaymentTypeComponent implements OnInit {
  constructor(
    private payment_typeService: PaymentTypeService,
    private notificationService: NotificationService
  ) {}

  payment_types: Payment_type[] = [];
  displayedColumns: string[] = ['payment_type', 'state', 'edit', 'delete'];

  ngOnInit() {
    this.payment_typeService.findAll().subscribe({
      error: (res: any) => this.notificationService.showError(res.message),
      next: (res: any) => (this.payment_types = res.data),
    });
  }
  onDelete(id: string) {
    this.payment_typeService.remove(id).subscribe({
      next: (res: any) => this.notificationService.showSuccess(res.message),
      error: (res: any) =>
        this.notificationService.showError('Failed to delete payment type.'),
      complete: () => window.location.reload(),
    });
  }
}
