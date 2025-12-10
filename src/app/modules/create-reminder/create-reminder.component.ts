import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReminderService } from 'src/app/service/reminder.service';

@Component({
  selector: 'app-create-reminder',
  templateUrl: './create-reminder.component.html',
  styleUrls: ['./create-reminder.component.scss']
})
export class CreateReminderComponent implements OnInit {
  title = '';
  description = '';
  date = '';
  minDate!:string;
  constructor(private reminderService: ReminderService, private router: Router) {}

  ngOnInit(){
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');  // Ensure 2-digit month
    const day = String(now.getDate()).padStart(2, '0');        // Ensure 2-digit day
    const hours = String(now.getHours()).padStart(2, '0');     // Ensure 2-digit hour
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Ensure 2-digit minutes

    this.minDate = `${year}-${month}-${day}T${hours}:${minutes}`;

  }

  onCreateReminder() {
    this.reminderService.createReminder(this.title, this.description, this.date).subscribe(
      (data) => {
        this.router.navigate(['/reminders']);
      },
      (error) => {
        console.error('Error creating reminder', error);
      }
    );
  }
}
