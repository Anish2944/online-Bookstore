import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthStore } from '../../auth/auth.store';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: any;

  constructor(private store: AuthStore, private auth: AuthService, private router: Router) {
    this.user = this.store.user;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
