import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars.component';
import { CarsResolver } from './cars-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: CarsComponent,
    resolve: {
      carData: CarsResolver
    }
  },
  {
    path: ':name',
    loadChildren: '../cars-detail/cars-detail.module#CarsDetailModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
