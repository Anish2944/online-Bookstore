import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, of, catchError } from 'rxjs';
import { ApiResponse } from '../core/api-response.model';
import { AuthResponse } from '../core/user.model';
import { AuthStore } from './auth.store';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://onlinebookstoreapi.onrender.com/api/auth'; // Your ASP.NET backend
  private platformId = inject(PLATFORM_ID);

  constructor(private http: HttpClient, private authStore: AuthStore, private router: Router) {}

    // ✅ auto-login
    autoLogin(): void {
      if (isPlatformBrowser(this.platformId)) {
        const token = localStorage.getItem('token');
        if (token) {
          this.http.get<ApiResponse<AuthResponse>>(`${this.apiUrl}/me`)
            .pipe(
              tap(res => {
                if (res.success && res.data) {
                  this.authStore.setUser(res.data);
                  if (this.router.url === '/' || this.router.url === '/login') {
                    if (res.data.role === 'Admin') {
                      this.router.navigate(['/admin']);
                    } else {
                      this.router.navigate(['/home']);
                    }
                  }
                
                } else {
                  this.logout();
                }
              }),
              catchError(() => {
                this.logout();
                return of(null);
              })
            )
            .subscribe();
        }
      }
    }

  register(data: { name: string; email: string; password: string; role: string }): Observable<ApiResponse<AuthResponse>> {
    return this.http.post<ApiResponse<AuthResponse>>(`${this.apiUrl}/register`, data).pipe(
      tap(res => {
        if (res.success && res.data) {
          localStorage.setItem('token', res.data.token);
          this.authStore.setUser(res.data);

          if (res.data.role === 'Admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/home']);
          }
        }
      })
    );
  }

  login(data: { email: string; password: string }): Observable<ApiResponse<AuthResponse>> {
    return this.http.post<ApiResponse<AuthResponse>>(`${this.apiUrl}/login`, data).pipe(
      tap(res => {
        if (res.success && res.data) {
          localStorage.setItem('token', res.data.token);
          this.authStore.setUser(res.data);
          console.log('res.data.role:', res.data.role);
          if (res.data.role === 'Admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/home']);
          }
        }
      })
    );
  }


  getMe(): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(`${this.apiUrl}/me`);
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
    this.authStore.clearUser();
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('token');
    }
    return false;
  }
}
