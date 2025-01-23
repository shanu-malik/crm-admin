import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-master-submenu-dialog',
  templateUrl: './master-submenu-dialog.component.html',
  styleUrls: ['./master-submenu-dialog.component.scss'],
})
export class SubmenuDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { submenuItems: any[] }) {}
  
}
