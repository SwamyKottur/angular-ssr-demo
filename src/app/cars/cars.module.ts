import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { CarsResolver } from './cars-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule
  ],
  declarations: [
    CarsComponent,
  ],
  providers: [CarsResolver]
})
export class CarsModule { }
