import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxPackingRoutingModule } from './box-packing-routing.module';
import { BoxPackingComponent } from './box-packing.component';


@NgModule({
  declarations: [
    BoxPackingComponent
  ],
  imports: [
    CommonModule,
    BoxPackingRoutingModule
  ]
})
export class BoxPackingModule { }
