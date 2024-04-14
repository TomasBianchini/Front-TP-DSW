import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userDataString = localStorage.getItem('user');
  const router = inject(Router);
  if (userDataString) {
    const user = JSON.parse(userDataString);
    if (user && user.type === 'Admin') {
      return true;
    } else {
      router.navigate(['/login']);
    }
  } else {
    router.navigate(['/login']);
  }
  return false;
};
