import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { ShippingService } from 'src/app/services/shipping-service/shipping.service';

@Component({
  selector: 'app-edit-shipping',
  templateUrl: './edit-shipping.component.html',
  styleUrls: ['./edit-shipping.component.css'],
})
export class EditShippingComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private shippingService: ShippingService,
    private formBuilder: FormBuilder
  ) {}
  shipping_id!: string;
  shippingForm!: FormGroup;

  ngOnInit() {
    this.shipping_id = this.route.snapshot.params['id'];
    this.shippingForm = this.formBuilder.group({
      shipmethod: ['', [Validators.required, Validators.maxLength(150)]],
      price: ['', [Validators.required]],
      estimatedTime: ['', [Validators.required]],
      cancellationDeadline: ['', [Validators.required]],
      state: [
        '',
        [Validators.required, Validators.pattern(/^(Active|Archived)$/)],
      ],
    });

    this.shippingService.findOne(this.shipping_id).subscribe({
      next: (res: any) =>
        this.shippingForm.setValue({
          shipmethod: res.data.shipmethod,
          state: res.data.state,
          price: res.data.price,
          estimatedTime: res.data.estimatedTime,
          cancellationDeadline: res.data.cancellationDeadline,
        }),
      error: (res: any) =>
        this.notificationService.showError(res.error.message),
    });
  }

  onSubmit() {
    if (this.shippingForm.valid) {
      this.shippingService
        .update(this.shipping_id, this.shippingForm.value)
        .subscribe({
          error: (res: any) => this.notificationService.showError(res.message),
          complete: () => {
            this.notificationService.showSuccess(
              'Shipping updated successfully'
            );
            this.router.navigate(['/shipping']);
          },
        });
    } else {
      this.notificationService.showError('Invalid form data');
    }
  }
}
