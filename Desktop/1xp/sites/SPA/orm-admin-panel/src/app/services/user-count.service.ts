// src/app/services/user-count.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserCountService {
  private userCountSubject = new BehaviorSubject<number>(this.getUserCountFromStorage());
  userCount$ = this.userCountSubject.asObservable();

  constructor() {
    // Слушаем изменения localStorage
    fromEvent<StorageEvent>(window, 'storage').subscribe((event) => {
      if (event.key === 'userCount') {
        this.updateUserCount();
      }
    });
  }

  updateUserCount(): void {
    const count = this.getUserCountFromStorage();
    this.userCountSubject.next(count);
  }

  private getUserCountFromStorage(): number {
    const value = localStorage.getItem('userCount');
    return value ? parseInt(value, 10) : 0;
  }
}