import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],  // Include necessary modules
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private router: Router) {}

  onLogin(): void {
    // Check if the username and password match (for simplicity, this example doesn't use real authentication)
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/dashboard']);  // Redirect to a dashboard page
    } else {
      this.loginError = 'Invalid username or password!';
    }
  }
}
