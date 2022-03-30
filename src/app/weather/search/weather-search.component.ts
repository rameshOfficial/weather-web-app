import { Component } from '@angular/core';

import { Subject } from 'rxjs';

import { WeatherService } from '../weather.service';
import { WeatherItem } from '../item/weather-item';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent {
  private searchStream = new Subject<string>();
  data: any = {};
  error!: boolean;
  message: any;

  constructor(private _weatherService: WeatherService) {}

  onSearch(city: string, country?: string): void {
    this._weatherService.searchWeatherInfo(city, country).subscribe((res) => {
      if (res.name.toLowerCase() == city.toLowerCase()) {
        this.error = false;
        this._weatherService.clearWeatherItems();
        this.addToItem(res);
      } else {
        this.error = true;
      }
    },
    (err) => {
      this.error = true;
      this.message = err.message;
    });
  }

  addToItem(data: any) {
    let lat: number = data.coord.lat;
    let lon: number = data.coord.lon;
    let cityName: string = data.name;
    let countryCode = data.sys ? data.sys.country : '';

    this._weatherService.getWeatherForecast(lat, lon).subscribe((res) => {
      for (const forecast of res.daily) {
        this.transformForecastWeatherData(forecast, cityName, countryCode);
      }
    });
  }

  transformForecastWeatherData(
    data: any,
    cityName: string,
    countryCode: string
  ) {
    let date: Date = new Date(data.dt * 1000);
    let cityDescription: string = data.weather ? data.weather[0].main : '';
    let minTemp: number = data.temp ? 1 * data.temp.min : 0;
    let maxTemp: number = data.temp ? 1 * data.temp.max : 0;
    let feelsLike: number = data.feels_like ? 1 * data.feels_like.day : 0;
    let humidity: number = data.humidity ? 1 * data.humidity : 0;

    const newItem = new WeatherItem(
      date,
      cityName,
      cityDescription,
      minTemp,
      countryCode,
      maxTemp,
      feelsLike,
      humidity,
      data.dt
    );

    this._weatherService.addWeatherItem(newItem);
  }
}
