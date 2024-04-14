import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { adminGuard } from './admin.guard';

describe('adminGuard', () => {
  let mockRouter: any;
  let mockActivatedRouteSnapshot: ActivatedRouteSnapshot;
  let mockRouterStateSnapshot: RouterStateSnapshot;

  beforeEach(() => {
    mockRouter = {
      navigate: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: mockRouter }],
    });
    mockActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    mockRouterStateSnapshot = {} as RouterStateSnapshot;
  });

  it('should allow access for admin user', () => {
    TestBed.runInInjectionContext(() => {
      localStorage.setItem('user', JSON.stringify({ type: 'Admin' }));

      const canActivate = adminGuard(
        mockActivatedRouteSnapshot,
        mockRouterStateSnapshot
      );

      expect(canActivate).toBe(true);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
  });

  it('should navigate to login page for non-admin user', () => {
    TestBed.runInInjectionContext(() => {
      localStorage.setItem('user', JSON.stringify({ type: 'User' }));

      const canActivate = adminGuard(
        mockActivatedRouteSnapshot,
        mockRouterStateSnapshot
      );

      expect(canActivate).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
    });
  });

  it('should navigate to login page if the user is null', () => {
    TestBed.runInInjectionContext(() => {
      localStorage.setItem('user', JSON.stringify(null));

      const canActivate = adminGuard(
        mockActivatedRouteSnapshot,
        mockRouterStateSnapshot
      );

      expect(canActivate).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
    });
  });

  it('should navigate to login page if the data user is not found ', () => {
    TestBed.runInInjectionContext(() => {
      localStorage.removeItem('user');
      const canActivate = adminGuard(
        mockActivatedRouteSnapshot,
        mockRouterStateSnapshot
      );

      expect(canActivate).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
    });
  });
});
