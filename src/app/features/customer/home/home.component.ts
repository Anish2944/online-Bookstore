import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { HeaderComponent } from '../../../shared/header/header.component';
import { AuthStore } from '../../../auth/auth.store';
import { AuthService } from '../../../auth/auth.service';
@Component({
  selector: 'app-customer-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  user: any; // Declare user property

  constructor(private store: AuthStore, private auth: AuthService) {
    this.user = this.store.user; // Initialize user after store
  }

  logout() {
    this.auth.logout();
  }
}