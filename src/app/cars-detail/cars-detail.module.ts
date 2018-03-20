import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsDetailRoutingModule } from './cars-detail-routing.module';
import { CarsDetailComponent } from './cars-detail.component';
import { CarsDetailResolver } from './cars-detail-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    CarsDetailRoutingModule
  ],
  declarations: [
    CarsDetailComponent,
  ],
  providers: [CarsDetailResolver]
})
export class CarsDetailModule { }
