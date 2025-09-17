import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login({ email: this.email, password: this.password })
    .subscribe({
      next: () => {
        alert('Login successful!'); 
        this.router.navigate(['/home']);
      },
      error: err => {
        alert('Error: ' + (err?.error?.message ?? 'Unknown'));
        console.error(err);
      }
    });
  }
}
