import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private apiUrl = 'http://localhost:3211/messages'; 

  constructor(private http: HttpClient) {}

  getAllMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiUrl);
  }

  updateMessage(message: Message): Observable<Message> {
    return this.http.put<Message>(`${this.apiUrl}/${message.id}`, message);
  }

  updateButton(messageId: number, button: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${messageId}/buttons/${button.id}`, button);
  }
}