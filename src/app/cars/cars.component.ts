import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  title: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { carData: any }) => {
          console.log(data);
          this.title = data.carData;
        },
        err => {
          // Log errors if any
          console.warn('component error', err);
        },
      );
  }
}
