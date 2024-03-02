import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Entities/User.js';
import { LoginService } from 'src/app/services/login-service/login.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(private loginService: LoginService, private router: Router) {}
  user!: User;
  ngOnInit(): void {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      this.user = JSON.parse(userDataString);
    }
  }
  signOut() {
    this.loginService.logOut();
    this.router.navigate(['/login']);
  }
  isAdmin() {
    if (this.user.type === 'Admin') {
      return true;
    } else {
      return false;
    }
  }
  isSeller() {
    if (this.user.type === 'Seller') {
      return true;
    } else {
      return false;
    }
  }
}
