import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // Constructor is optional if you need to inject services (e.g., TokenService or AuthService)
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the token (you can change the logic to get the token from LocalStorage, SessionStorage, or a service)
    const token = localStorage.getItem('auth-token'); // Replace with your own token retrieval logic

    if (token) {
      // Clone the request to add the new header
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      // Pass the cloned request instead of the original request
      return next.handle(clonedRequest);
    }

    // If no token, pass the original request unchanged
    return next.handle(req);
  }
}
