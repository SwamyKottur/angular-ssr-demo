import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

// Import RxJs required methods
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CustomBikesResolver implements Resolve<any> {
  title: any;

  constructor() {}

  resolve(): Observable<any> {
    this.title = 'Hey, this is the block for displaying various Customized Bikes';
    return this.title;
  }
}
