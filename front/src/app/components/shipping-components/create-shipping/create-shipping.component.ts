import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { ShippingService } from 'src/app/services/shipping-service/shipping.service';

@Component({
  selector: 'app-create-shipping',
  templateUrl: './create-shipping.component.html',
  styleUrls: ['./create-shipping.component.css'],
})
export class CreateShippingComponent {
  constructor(
    private shippingService: ShippingService,
    private router: Router,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder
  ) {}
  shippingForm!: FormGroup;

  ngOnInit() {
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
  }

  onSubmit() {
    if (this.shippingForm.valid) {
      this.shippingService.add(this.shippingForm.value).subscribe({
        error: (res: any) =>
          this.notificationService.showError(res.error.message),
        complete: () => {
          this.notificationService.showSuccess('Shipping added successfully');
          this.router.navigate(['/shipping']);
        },
      });
    } else {
      this.notificationService.showError('Invalid form data');
    }
  }
}
