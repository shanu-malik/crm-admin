import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  
  constructor(private snackBar: MatSnackBar) {
   
  }

  private show(message: string, action: string = 'Close', duration: number = 3000, panelClass: string[] = []) {
    console.log('panelClass',panelClass);
    
    this.snackBar.open(message, action, {
      duration: duration,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['customClass'], // Add custom CSS class for styling
    });
  }

  // Show success message with custom class
  showSuccess(message: string, action: string = 'Close', duration: number = 3000) {
    this.show(message, action, duration, ['success-snackbar']);
  }

  // Show error message with custom class
  showError(message: string, action: string = 'Close', duration: number = 3000) {
    this.show(message, action, duration, ['error-snackbar']);
  }

  // Show info message with custom class
  showInfo(message: string, action: string = 'Close', duration: number = 3000) {
    this.show(message, action, duration, ['info-snackbar']);
  }

  // Show warning message with custom class
  showWarning(message: string, action: string = 'Close', duration: number = 3000) {
    this.show(message, action, duration, ['warning-snackbar']);
  }
}
