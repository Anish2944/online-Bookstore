import { Component } from '@angular/core';
import { AuthStore } from '../../../auth/auth.store';
import { AuthService } from '../../../auth/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../shared/header/header.component';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  user: any; // Declare user property

  constructor(private store: AuthStore, private auth: AuthService) {
    this.user = this.store.user; // Initialize user after store 
  }

  logout() {
    this.auth.logout();
  }
}
