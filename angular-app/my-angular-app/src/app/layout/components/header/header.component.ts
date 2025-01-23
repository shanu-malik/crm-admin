import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../core/services/themes/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports:[MatIconModule,MatButtonModule,MatToolbarModule,CommonModule]
})
export class HeaderComponent {
  constructor(private router: Router,private themeService: ThemeService) {}
  
  @Input() sidenav!: MatSidenav; // Receive sidenav from LayoutComponent

  isDarkMode = false;

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
