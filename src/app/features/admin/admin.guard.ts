import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthStore } from '../../auth/auth.store';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(private authStore: AuthStore, private router: Router) {}

  canActivate(): boolean {
    if (this.authStore.user?.role === 'Admin') {
      return true;
    }
    this.router.navigate(['/unauthorized']);
    return false;
  }
}
