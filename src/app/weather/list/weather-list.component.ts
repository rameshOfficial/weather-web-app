import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';
import { WeatherItem } from '../item/weather-item';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
})
export class WeatherListComponent implements OnInit {
  weatherItems!: WeatherItem[];
  sortByAsc = true;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit(): any {
    this.weatherItems = this._weatherService.getWeatherItems();
  }

  sortByDate() {
    this.sortByAsc = !this.sortByAsc;
    this.weatherItems = this.weatherItems.sort((a: any, b: any) => {
      if (this.sortByAsc)
        return (
          new Date(b.dateInMillis).getTime() -
          new Date(a.dateInMillis).getTime()
        );
      else
        return (
          new Date(a.dateInMillis).getTime() -
          new Date(b.dateInMillis).getTime()
        );
    });
  }
}
