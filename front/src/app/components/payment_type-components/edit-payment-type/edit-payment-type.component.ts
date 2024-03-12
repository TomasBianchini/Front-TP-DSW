import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification-service/notification.service';
import { PaymentTypeService } from 'src/app/services/payment_type-service/payment-type.service';

@Component({
  selector: 'app-edit-payment-type',
  templateUrl: './edit-payment-type.component.html',
  styleUrls: ['./edit-payment-type.component.css'],
})
export class EditPaymentTypeComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private payment_typeService: PaymentTypeService,
    private formBuilder: FormBuilder
  ) {}
  paymentTypeId!: string;
  payment_typeForm!: FormGroup;

  ngOnInit() {
    this.paymentTypeId = this.route.snapshot.params['id'];
    this.payment_typeForm = this.formBuilder.group({
      payment_type: ['', [Validators.required, Validators.maxLength(150)]],
      state: [
        '',
        [Validators.required, Validators.pattern(/^(Active|Archived)$/)],
      ],
    });

    this.payment_typeService.findOne(this.paymentTypeId).subscribe({
      next: (res: any) =>
        this.payment_typeForm.setValue({
          payment_type: res.data.payment_type,
          state: res.data.state,
        }),
      error: (res: any) =>
        this.notificationService.showError(res.error.message),
    });
  }

  onSubmit() {
    if (this.payment_typeForm.valid) {
      this.payment_typeService
        .update(this.paymentTypeId, this.payment_typeForm.value)
        .subscribe({
          error: (res: any) => this.notificationService.showError(res.message),
          complete: () => {
            this.notificationService.showSuccess(
              'Payment type updated successfully'
            );
            this.router.navigate(['/payment_type']);
          },
        });
    } else {
      this.notificationService.showError('Invalid form data');
    }
  }
}
