// header.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  logout() {
    // Handle the logout process (e.g., clear user data, redirect to login)
    // Example:
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
