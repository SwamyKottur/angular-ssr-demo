import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsDetailComponent } from './cars-detail.component';
import { CarsDetailResolver } from './cars-detail-resolver.service';
const routes: Routes = [
  {
    path: '',
    component: CarsDetailComponent,
    resolve: {
      carDetailData: CarsDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsDetailRoutingModule { }
