import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthStore } from '../../auth/auth.store';
@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent {
  route: string = "/login"; // default route
  constructor(private authStore: AuthStore) {
    this.route = authStore.user?.role === 'Admin' ? '/admin' : '/home';
  }
}
