import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToasterService } from '../../core/services/notifications/notification.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],  // Include necessary modules
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: string = '';
  error:  any={}
  constructor(
    private router: Router,
    private toasterService:ToasterService
  ) {}
  handleChange():void{
    this.error = {}; // Clear previous errors
    if(!this.email) this.error.email='Email is Required'
    if(!this.password) this.error.password='Password is Required'
  }

  onLogin(): void {
    this.handleChange();
    let size = Object.keys(this.error).length;
    console.log('thiserr',this.error);
    
    console.log('size',size);
    
    if(size) return ;
    if (this.email === 'admin' && this.password === 'admin') {
      this.router.navigate(['/dashboard']);  // Redirect to a dashboard page
    } else {
      this.toasterService.showError('Invalid username or password!');
    }
  }
}
