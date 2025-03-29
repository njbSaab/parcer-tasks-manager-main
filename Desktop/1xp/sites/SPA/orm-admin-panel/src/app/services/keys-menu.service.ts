import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeysMenu } from '../interfaces/keys-menu.interface';

@Injectable({
  providedIn: 'root',
})
export class KeysMenuService {
  private apiUrl = 'http://localhost:3211/keys-menu';

  constructor(private http: HttpClient) {}

  getAllKeysMenus(): Observable<KeysMenu[]> {
    return this.http.get<KeysMenu[]>(this.apiUrl);
  }

  updateKeysMenu(keysMenu: KeysMenu): Observable<KeysMenu> {
    return this.http.put<KeysMenu>(`${this.apiUrl}/${keysMenu.id}`, keysMenu);
  }
}