import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataHistoryRoutingModule } from './data-history-routing.module';
import { DataHistoryComponent } from './data-history.component';


@NgModule({
  declarations: [
    DataHistoryComponent
  ],
  imports: [
    CommonModule,
    DataHistoryRoutingModule
  ]
})
export class DataHistoryModule { }
