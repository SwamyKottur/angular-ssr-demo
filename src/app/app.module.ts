import { SelectivePreloadingStrategy } from './utils/selective-preloading-strategy';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', redirectTo: 'cars', pathMatch: 'full' },
      { path: 'cars', loadChildren: './cars/cars.module#CarsModule' },
      { path: 'bikes', loadChildren: './bikes/bikes.module#BikesModule', data: { preload: true } }
    ], { preloadingStrategy: SelectivePreloadingStrategy })
  ],
  providers: [SelectivePreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
