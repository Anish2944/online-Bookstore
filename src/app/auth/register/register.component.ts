import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  role = 'User';

  constructor(private auth: AuthService) {}

  register() {
    this.auth.register({ name: this.name, email: this.email, password: this.password, role: this.role })
      .subscribe({
        next: res => alert('Registration successful!'),
        error: err => alert('Error: ' + err.error.message)
      });
  }
}
