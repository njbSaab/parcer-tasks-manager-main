import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isLoggedIn = false;
  private baseUrl = 'http://localhost:3211/api/admin-auth'; // ⚠️ адаптируй при деплое

  constructor(private http: HttpClient, private router: Router) {}

  login(login: string, password: string): Promise<boolean> {
    return this.http
      .post<any>(`${this.baseUrl}/login`, { login, password })
      .toPromise()
      .then((user) => {
        this.isLoggedIn = true;
        localStorage.setItem('auth', 'true');
        localStorage.setItem('isAvailable', 'true');
        localStorage.setItem('role', user.role);
        localStorage.setItem('login', user.login); 
        return true;
      })
      .catch(() => false);
  }
  
  getLogin(): string | null {
    return localStorage.getItem('login');
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn || localStorage.getItem('auth') === 'true';
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

}