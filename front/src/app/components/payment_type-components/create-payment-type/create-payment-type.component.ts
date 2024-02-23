import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notication-service/notification.service';
import { PaymentTypeService } from 'src/app/services/payment_type-service/payment-type.service';
@Component({
  selector: 'app-create-payment-type',
  templateUrl: './create-payment-type.component.html',
  styleUrls: ['./create-payment-type.component.css'],
})
export class CreatePaymentTypeComponent {
  constructor(
    private payment_typeService: PaymentTypeService,
    private router: Router,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder
  ) {}
  payment_typeForm!: FormGroup;

  ngOnInit() {
    this.payment_typeForm = this.formBuilder.group({
      payment_type: ['', [Validators.required, Validators.maxLength(150)]],
      state: [
        '',
        [Validators.required, Validators.pattern(/^(Active|Archived)$/)],
      ],
    });
  }

  onSubmit() {
    if (this.payment_typeForm.valid) {
      this.payment_typeService.add(this.payment_typeForm.value).subscribe({
        error: (res: any) => this.notificationService.showError(res.message),
        complete: () => {
          this.notificationService.showSuccess(
            'Payment type added successfully'
          );
          this.router.navigate(['/payment_type']);
        },
      });
    } else {
      this.notificationService.showError('Invalid form data');
    }
  }
}
