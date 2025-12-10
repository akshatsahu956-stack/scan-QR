import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentScanRoutingModule } from './component-scan-routing.module';
import { ComponentScanComponent } from './component-scan.component';


@NgModule({
  declarations: [
    ComponentScanComponent
  ],
  imports: [
    CommonModule,
    ComponentScanRoutingModule
  ]
})
export class ComponentScanModule { }
