import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  title: any;
  custom: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { bikeData: any, customData: any }) => {
          console.log(data);
          this.title = data.bikeData;
          this.custom = data.customData;
        },
        err => {
          // Log errors if any
          console.warn('component error', err);
        },
      );
  }

}
