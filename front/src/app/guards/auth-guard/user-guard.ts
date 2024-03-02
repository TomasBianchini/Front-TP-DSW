import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SellerGuard {
  constructor(private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const userDataString = localStorage.getItem('user');

    if (userDataString) {
      const user = JSON.parse(userDataString);

      if (user.type === 'User') {
        return true;
      } else {
        this.router.navigate(['/login']);
      }
    } else {
      this.router.navigate(['/login']);
    }
    return false;
  }
}
