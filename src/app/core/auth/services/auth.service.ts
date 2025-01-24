import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Example: Check if a token is in localStorage
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');  // Check if an auth token is present
  }

  login(username: string, password: string): boolean {
    // Perform login logic (e.g., send credentials to the API)
    // On successful login, save the token
    localStorage.setItem('authToken', 'some_token');  // Example token
    return true;
  }

  logout(): void {
    // Clear the token on logout
    localStorage.removeItem('authToken');
  }
}
