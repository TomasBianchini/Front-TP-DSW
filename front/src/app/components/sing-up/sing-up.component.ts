import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notication-service/notification.service';
import { SellerService } from 'src/app/services/seller-service/seller.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css'],
})
export class SingUpComponent implements OnInit {
  userForm!: FormGroup;
  constructor(
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private sellerService: SellerService
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      user_name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      address: ['', [Validators.required, Validators.maxLength(150)]],
      type: ['', [Validators.required, Validators.pattern(/^(User|Seller)$/)]],
      shop_name: [''],
      cuil: [''],
      cbu: [''],
    });
  }
  onSubmit() {
    if (this.userForm.valid) {
      if (this.userForm.value.type === 'User') {
        this.userService.add(this.userForm.value).subscribe({
          error: (res: any) =>
            this.notificationService.showError(res.error.message),
          next: () => {
            this.notificationService.showSuccess('User added successfully');
            this.router.navigate(['/login']);
          },
        });
      } else {
        this.sellerService.add(this.userForm.value).subscribe({
          error: (res: any) =>
            this.notificationService.showError(res.error.message),
          next: () => {
            this.notificationService.showSuccess('User added successfully');
            this.router.navigate(['/login']);
          },
        });
      }
    } else {
      this.notificationService.showError('Invalid form data');
    }
  }
}
