import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Entities/User.js';
import { LoginService } from 'src/app/services/login-service/login.service';
import { NotificationService } from 'src/app/services/notication-service/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public user!: User;
  constructor(
    private notificationService: NotificationService,
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {}
  loginForm!: FormGroup;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  token!: string;
  onSubmit() {
    this.loginService.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        this.user = res.data;
        this.token = res.token;
        console.log(this.user, ' and the token is ' + this.token);
        this.notificationService.showSuccess('Login successful');
      },
      error: (res: any) => this.notificationService.showError(res.message),
    });
  }
}
