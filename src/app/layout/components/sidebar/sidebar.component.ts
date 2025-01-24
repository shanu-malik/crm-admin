import { Component,Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { SubmenuDialogComponent } from '../../../shared/components/submenu-dialog/submenu-dialog.component';
import { MatDialog } from '@angular/material/dialog';


interface MenuItem {
  title: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink,CommonModule, MatSidenavModule, MatListModule, MatIconModule, MatButtonModule, RouterModule,MatSidenav,MatExpansionModule,MatDialogModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() collapsed = false;
  masterSubmenuItems = [
    { name: 'Option 1', icon: 'home' },
    { name: 'Option 2', icon: 'settings' },
    { name: 'Option 3', icon: 'help' },
  ];

  constructor(private dialog: MatDialog) {}

  menuItems: MenuItem[] = [
    { title: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { title: 'Influencer', icon: 'person', route: '/influencer' },
    { title: 'Coupon', icon: 'confirmation_number', route: '/coupon' },
    { title: 'Transaction History', icon: 'receipt', route: '/transactions' },
    { title: 'Redeem Requests', icon: 'redeem', route: '/redeem-requests' },
    { title: 'Wallet', icon: 'wallet', route: '/wallet' },
    {
      title: 'Master',
      icon: 'shopping_cart',
      children: [
        { title: 'Users', icon: 'group', route: '/master/users' },
        { title: 'Categories', icon: 'category', route: '/master/categories' },
        { title: 'Sub Categories', icon: 'list', route: '/master/sub-categories' },
        { title: 'Point Categories', icon: 'stars', route: '/master/point-categories' },
        { title: 'Gift Gallery', icon: 'card_giftcard', route: '/master/gift-gallery' },
        { title: 'Designations', icon: 'business', route: '/master/designations' },
        { title: 'Roles', icon: 'admin_panel_settings', route: '/master/roles' },
        { title: 'Products', icon: 'shopping_bag', route: '/master/products' }
      ]
    }
  ];
  
  
}

