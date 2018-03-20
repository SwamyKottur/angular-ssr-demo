import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikesRoutingModule } from './bikes-routing.module';
import { BikesComponent } from './bikes.component';
import { BikesResolver } from './bikes-resolver.service';
import { CustomBikesResolver } from './custom-bikes-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    BikesRoutingModule,
  ],
  declarations: [
    BikesComponent,
  ],
  providers: [
    BikesResolver,
    CustomBikesResolver,
  ]
})
export class BikesModule { }
