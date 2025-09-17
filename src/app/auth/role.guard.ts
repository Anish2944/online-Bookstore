import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private store: AuthStore, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles: string[] = route.data?.['roles'] || [];
    const user = this.store.user;
    if (user && expectedRoles.some(r => r.toLowerCase() === user.role.toLowerCase())) {
      return true;
    }    
    this.router.navigate(['/unauthorized']);
    return false;
  }
}
