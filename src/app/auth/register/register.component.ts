import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  role = 'Customer';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register({ name: this.name, email: this.email, password: this.password, role: this.role })
      .subscribe({
        next: () => {alert('Registration successful!'); this.router.navigate(['/login']);},
        error: err => alert('Error: ' + (err?.error?.message ?? 'Unknown'))
      });
  }
}
