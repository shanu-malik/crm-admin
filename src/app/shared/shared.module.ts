import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // For common directives like ngIf, ngFor
import { MatDialogModule } from '@angular/material/dialog';  // For dialog modals


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,  // Import Angular's common directives and functionality
    MatDialogModule, // Import Material Dialogs to use across the app
  ],
  exports: [
    CommonModule,  // Export CommonModule so other modules can use ngIf, ngFor
    MatDialogModule, // Export MatDialogModule so other modules can use modals
  ],
  providers: [
    
  ]
})
export class SharedModule {}
