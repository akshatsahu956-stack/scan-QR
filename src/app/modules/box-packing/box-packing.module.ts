import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxPackingRoutingModule } from './box-packing-routing.module';
import { BoxPackingComponent } from './box-packing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BoxPackingComponent
  ],
  imports: [
    CommonModule,
    BoxPackingRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BoxPackingModule { }
