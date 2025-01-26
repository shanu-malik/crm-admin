import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


/**
 * @title Basic snack-bar
 */
@Component({
  selector: 'snack-bar',
  templateUrl: 'snack-bar.componnet.html',
  styleUrls: ['snack-bar.componnet.css'],
})
export class SnackBarComponent {
  constructor(private snackBar: MatSnackBar) {}
  openSnackBar(message: string, action: string = 'Close', duration: number = 3000, panelClass: string[] = []) {
    this.snackBar.open(message, action, {
        duration: duration,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['success-snackbar'], // Add custom CSS class for styling
      });
  }
}
