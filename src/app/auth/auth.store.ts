import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthResponse } from '../core/user.model';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  // BehaviorSubject keeps the latest value and emits it to new subscribers
  private userSubject = new BehaviorSubject<AuthResponse | null>(null);
  
  // Observable for components to subscribe to
  user$ = this.userSubject.asObservable();

  // Current snapshot (like useState’s value)
  get user(): AuthResponse | null {
    return this.userSubject.value;
  }

  // Update user state
  setUser(user: AuthResponse) {
    this.userSubject.next(user);
  }

  // Clear user state (e.g., on logout)
  clearUser() {
    this.userSubject.next(null);
  }
}
