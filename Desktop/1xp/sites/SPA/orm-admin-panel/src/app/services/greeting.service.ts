import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GreetingBot } from '../interfaces/greeting.interface';

@Injectable({
  providedIn: 'root',
})
export class GreetingService {
  private apiUrl = 'http://localhost:3211/api/greetings'; // Ваш серверный URL

  constructor(private http: HttpClient) {}

  getAllGreetings(): Observable<GreetingBot[]> {
    return this.http.get<GreetingBot[]>(this.apiUrl);
  }

  getGreetingById(id: number): Observable<GreetingBot> {
    return this.http.get<GreetingBot>(`${this.apiUrl}/${id}`);
  }

  updateGreeting(id: number, data: Partial<GreetingBot>): Observable<GreetingBot> {
    return this.http.put<GreetingBot>(`${this.apiUrl}/${id}`, data);
  }
}