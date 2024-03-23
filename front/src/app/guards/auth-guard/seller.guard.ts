import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { inject } from '@angular/core';

export const sellerGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userDataString = localStorage.getItem('user');
  const router = inject(Router);
  if (userDataString) {
    const user = JSON.parse(userDataString);

    if (user.type === 'Seller') {
      return true;
    } else {
      router.navigate(['/login']);
    }
  } else {
    router.navigate(['/login']);
  }
  return false;
};
