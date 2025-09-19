import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { RoleGuard } from './auth/role.guard';
import { AdminGuard } from './features/admin/admin.guard';
import { CustomerGuard } from './features/customer/customer.guard';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Customer area
  {
    path: 'home',
    loadChildren: () =>
      import('./features/customer/customer.module').then(m => m.CustomerModule),
    canActivate: [AuthGuard, RoleGuard, CustomerGuard],
    data: { roles: ['Customer'] } // allow Admin to browse too if you like
  },

  // Admin area
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard, RoleGuard, AdminGuard],
    data: { roles: ['Admin'] }
  },

  // Basic pages (your existing login/register components are standalone)
  { path: 'login', loadComponent: () => import('./auth/login/login.component').then(c => c.LoginComponent) },
  { path: 'register', loadComponent: () => import('./auth/register/register.component').then(c => c.RegisterComponent) },

  // Unauthorized
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./shared/unauthorized/unauthorized.component').then(c => c.UnauthorizedComponent)
  },

  { path: '**', redirectTo: 'home' }
];
