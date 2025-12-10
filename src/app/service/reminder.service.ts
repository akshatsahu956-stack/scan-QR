import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

 private apiUrl = environment.BASE_URL + '/api/reminders';

  constructor(private http: HttpClient) {}

  createReminder(title: string, description: string, date: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, { title, description, date });
  }

  getUpcomingReminders(): Observable<any> {
    return this.http.get(`${this.apiUrl}/upcoming`);
  }
}
