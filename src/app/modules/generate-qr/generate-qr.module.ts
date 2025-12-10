import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateQrRoutingModule } from './generate-qr-routing.module';
import { GenerateQrComponent } from './generate-qr.component';


@NgModule({
  declarations: [
    
  
    GenerateQrComponent
  ],
  imports: [
    CommonModule,
    GenerateQrRoutingModule
  ]
})
export class GenerateQrModule { }
