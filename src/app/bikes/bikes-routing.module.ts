import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikesComponent } from './bikes.component';
import { BikesResolver } from './bikes-resolver.service';
import { CustomBikesResolver } from './custom-bikes-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: BikesComponent,
    resolve: {
      bikeData: BikesResolver,
      customData: CustomBikesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikesRoutingModule { }
