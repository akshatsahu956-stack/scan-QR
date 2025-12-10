import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateReminderComponent } from './create-reminder.component';
import { CreateReminderRoutingModule } from './create-reminder-routing.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CreateReminderComponent],
  imports: [
    CommonModule,
    FormsModule,
    CreateReminderRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ]
})
export class CreateReminderModule {}
