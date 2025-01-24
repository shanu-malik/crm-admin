import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'https://api.example.com'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  // GET request - Fetch data from API
  get<T>(endpoint: string, params: HttpParams = new HttpParams()): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.get<T>(url, { params });
  }

  // POST request - Send data to API
  post<T>(endpoint: string, body: any, params: HttpParams = new HttpParams()): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.post<T>(url, body, { params });
  }

  // PUT request - Update data on API
  put<T>(endpoint: string, body: any, params: HttpParams = new HttpParams()): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.put<T>(url, body, { params });
  }

  // DELETE request - Delete data on API
  delete<T>(endpoint: string, params: HttpParams = new HttpParams()): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.delete<T>(url, { params });
  }

  // Custom headers (optional)
  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer your-token-here', // Optional: Include Authorization token
    });
  }
}
