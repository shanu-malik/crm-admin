import { Component, Input,  HostListener, OnInit, OnDestroy } from '@angular/core';
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
export class HeaderComponent implements OnInit, OnDestroy{
  constructor(private router: Router,public themeService: ThemeService) {}
  
  @Input() sidenav!: MatSidenav; // Receive sidenav from LayoutComponent

  toggleTheme() {
    this.themeService.toggleTheme();
  }


  isFullScreen = false;

  ngOnInit(): void {
    document.addEventListener("fullscreenchange", this.onFullScreenChange);
    document.addEventListener("webkitfullscreenchange", this.onFullScreenChange);
    document.addEventListener("mozfullscreenchange", this.onFullScreenChange);
  }

  ngOnDestroy(): void {
    document.removeEventListener("fullscreenchange", this.onFullScreenChange);
    document.removeEventListener("webkitfullscreenchange", this.onFullScreenChange);
    document.removeEventListener("mozfullscreenchange", this.onFullScreenChange);
  }

  onFullScreenChange = () => {
    this.isFullScreen = !!document.fullscreenElement;
  };

  toggleFullScreen(): void {
    const docEl = document.documentElement as any; // Type-casting for older browsers
    const doc = document as any; // Type-casting for exitFullscreen()

    if (!this.isFullScreen) {
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen();
      } else if (docEl.mozRequestFullScreen) {
        docEl.mozRequestFullScreen();
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
      }
    } else {
      if (doc.exitFullscreen) {
        doc.exitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        doc.mozCancelFullScreen();
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      }
    }
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
