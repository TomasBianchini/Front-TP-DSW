import { Component } from '@angular/core';
import { Shipping } from 'src/app/Entities/Shipping';
import { NotificationService } from 'src/app/services/notication-service/notification.service';
import { ShippingService } from 'src/app/services/shipping-service/shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  constructor(
    private shippingService: ShippingService,
    private notificationService: NotificationService
  ) {}

  shippings!: Shipping[];
  displayedColumns: string[] = [
    'shipmethod',
    'price',
    'state',
    'edit',
    'delete',
  ];

  ngOnInit() {
    this.shippingService.findAll().subscribe({
      error: (res: any) => this.notificationService.showError(res.message),
      next: (res: any) => (this.shippings = res.data),
    });
  }
  onDelete(id: string) {
    this.shippingService.remove(id).subscribe({
      next: (res: any) => this.notificationService.showSuccess(res.message),
      error: (res: any) =>
        this.notificationService.showError('Failed to delete payment type.'),
      complete: () => window.location.reload(),
    });
  }
}
