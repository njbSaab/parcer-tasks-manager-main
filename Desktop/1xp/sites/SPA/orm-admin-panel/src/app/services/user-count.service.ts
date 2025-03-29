import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // 👈 добавить

@Injectable({
  providedIn: 'root',
})
export class UserCountService {
  private userCountSubject = new BehaviorSubject<number>(this.getUserCountFromStorage());
  userCount$ = this.userCountSubject.asObservable();

  constructor(private http: HttpClient) {} // 👈 внедрили

  // Универсальный метод
  updateUserCount(): void {
    this.http.get<any[]>('http://localhost:3211/api/users').subscribe((users) => {
      this.userCountSubject.next(users.length);
      localStorage.setItem('userCount', users.length.toString());
    });
  }

  private getUserCountFromStorage(): number {
    const value = localStorage.getItem('userCount');
    return value ? parseInt(value, 10) : 0;
  }
}