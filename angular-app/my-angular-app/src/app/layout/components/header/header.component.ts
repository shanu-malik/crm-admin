
import { Router } from '@angular/router';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
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



