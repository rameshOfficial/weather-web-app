import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';

import { WeatherItem } from './item/weather-item';

import { environment } from '../../environments/environment';

@Injectable()
export class WeatherService {
  weatherItems: WeatherItem[] = [];
  APPID = environment.appId;
  constructor(private _http: HttpClient) {}

  addWeatherItem(item: WeatherItem) {
    this.weatherItems.push(item);
  }

  getWeatherItems() {
    return this.weatherItems;
  }

  clearWeatherItems() {
    this.weatherItems.splice(0);
}

  searchWeatherInfo(city: string, country?: string): Observable<any> {
    let url = environment.baseUrl+`weather?q=${city},${country}&APPID=${this.APPID}&units=metric`;
    return this._http.get(url).pipe(
      catchError((error: HttpErrorResponse) => {
        if(404 === error.status) {
          return throwError(() => new Error('Weather details are not found'));
        }
        if(500 === error.status) {
          return throwError(() => new Error('Something went wrong, please try again later!'));
        }
        return throwError(() => new Error('Something went wrong, please try again later!'));
      })
    );
  }

  getWeatherForecast(lat: number, lon: number): Observable<any> {
    let url = environment.baseUrl+`onecall?lat=${lat}&lon=${lon}&exclude=hourly&&APPID=${this.APPID}&units=metric`;
    return this._http.get(url).pipe(
      catchError((error: HttpErrorResponse) => {
        if(404 === error.status) {
          return throwError(() => new Error('Weather details are not found'));
        }
        if(500 === error.status) {
          return throwError(() => new Error('Something went wrong, please try again later!'));
        }
        return throwError(() => new Error('Something went wrong, please try again later!'));
      })
      );
  }
}
