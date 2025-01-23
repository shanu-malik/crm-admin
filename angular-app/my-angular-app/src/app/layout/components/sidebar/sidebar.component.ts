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

  openSubMenuDialog() {
    const dialogRef = this.dialog.open(SubmenuDialogComponent, {
      data: { submenuItems: this.masterSubmenuItems },
      width: '300px', // Set the width of the dialog
      height: 'auto', // Adjust the height if necessary
      position: { left: '0', top: '50px' }, // Position the dialog closer to the sidenav
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Submenu dialog was closed');
    });
  }
  
  
}

