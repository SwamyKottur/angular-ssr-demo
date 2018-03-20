import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarsDetailComponent implements OnInit {
title: string;
constructor(private route: ActivatedRoute) { }

ngOnInit() {
  this.route.data.subscribe(
    (data: { carDetailData: any }) => {
        console.log(data);
        this.title = data.carDetailData;
        this.title = this.title.toLocaleUpperCase();
      },
      err => {
        // Log errors if any
        console.warn('component error', err);
      },
    );
}

}
