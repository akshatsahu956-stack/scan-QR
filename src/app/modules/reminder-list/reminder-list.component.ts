import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../../service/reminder.service';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.scss']
})
export class ReminderListComponent implements OnInit {
  reminders: any[] = [];
  loading = true;
  errorMessage = '';

  constructor(private reminderService: ReminderService) {}

  ngOnInit() {
    this.reminderService.getUpcomingReminders().subscribe({
      next: (data) => {
        this.reminders = data;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load reminders.';
        console.error('Error fetching reminders', error);
        this.loading = false;
      }
    });
  }
}
