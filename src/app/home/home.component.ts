import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthStore } from '../auth/auth.store';

@Component({
  selector: 'app-home',
  standalone: true,             // 👈 mark standalone
  imports: [CommonModule],      // 👈 allows *ngIf, async pipe, etc.
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']  // 👈 should be styleUrls
})
export class HomeComponent {
  constructor(public authStore: AuthStore, private router: Router) {}
  logout() {
    this.authStore.clearUser();
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
