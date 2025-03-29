// src/app/services/user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'http://localhost:3211/api/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }
}