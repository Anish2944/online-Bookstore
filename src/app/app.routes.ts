import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
export const routes: Routes = [
  { path: 'home', loadComponent: () => HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', loadComponent: () => LoginComponent },
  { path: 'register', loadComponent: () => RegisterComponent },
  { path: '**', redirectTo: 'login' }
];
