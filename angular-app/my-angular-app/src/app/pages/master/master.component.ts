import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';  // Import MatTableDataSource
import { MatIconModule } from '@angular/material/icon';  // Import MatIconModule
import { MatTableModule } from '@angular/material/table';  // Import MatTableModule

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
  imports:[MatIconModule,MatTableModule]
})
export class MasterComponent {

  // Define columns for the table
  displayedColumns: string[] = ['name', 'age', 'actions'];

  // Sample data for the table
  dataSource = new MatTableDataSource([
    { name: 'John Doe', age: 28 },
    { name: 'Jane Smith', age: 34 },
    { name: 'Bob Johnson', age: 45 },
  ]);

  // Actions for buttons (Example)
  viewAction(element: any) {
    alert('Viewing ' + element.name);
  }

  editAction(element: any) {
    alert('Editing ' + element.name);
  }

  deleteAction(element: any) {
    alert('Deleting ' + element.name);
  }
}
