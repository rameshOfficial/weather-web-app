import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { WeatherItem } from './item/weather-item';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule,HttpClientTestingModule],
        providers: [WeatherService]
    });
    service = TestBed.get(WeatherService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('addWeatherItem', () => {
    expect(service.getWeatherItems()).toEqual([]);
    const data: any ={};//TODO pass data

    service.addWeatherItem(data);
    expect(service.getWeatherItems().length).toEqual(1);;
  });

  it('getWeatherItems empty', () => {
    const expected = service.getWeatherItems();
    expect(expected).toEqual([]);
  });

  it('clearWeatherItems empty', () => {
    service.clearWeatherItems();
    const expected = service.getWeatherItems();
    expect(expected).toEqual([]);
  });

  it('searchWeatherInfo should use GET to retrieve data', () => {
    service.searchWeatherInfo("london","").subscribe();
    const testRequest = httpTestingController.expectOne('https://api.openweathermap.org/data/2.5/weather?q=london,&APPID=7a211c68435846ab04153a9d815b09f3&units=metric');
    expect(testRequest.request.method).toEqual('GET');
  });

  it('searchWeatherInfo should return expected data', (done) => {
    const expectedData: WeatherItem[] = [
    ];

    service.searchWeatherInfo("london","").subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
    
    const testRequest = httpTestingController.expectOne('https://api.openweathermap.org/data/2.5/weather?q=london,&APPID=7a211c68435846ab04153a9d815b09f3&units=metric');
    testRequest.flush(expectedData);
    
  });

  it('searchWeatherInfo should return 404 error', () => {
    service.searchWeatherInfo("london","").subscribe(
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toContain('Weather details are not found');
      }
    );

    const testRequest = httpTestingController.expectOne('https://api.openweathermap.org/data/2.5/weather?q=london,&APPID=7a211c68435846ab04153a9d815b09f3&units=metric');

    // Respond with mock error
    testRequest.flush('error', { status: 404, statusText: 'Weather details are not found' });
    
  });

  it('searchWeatherInfo should return 500 error', () => {
    service.searchWeatherInfo("london","").subscribe(
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(500);
        expect(error.error).toContain('Something went wrong, please try again later!');
      }
    );

    const testRequest = httpTestingController.expectOne('https://api.openweathermap.org/data/2.5/weather?q=london,&APPID=7a211c68435846ab04153a9d815b09f3&units=metric');

    // Respond with mock error
    testRequest.flush('error', { status: 500, statusText: 'Something went wrong, please try again later!' });
    
  });

  it('searchWeatherInfo should return any error', () => {
    service.searchWeatherInfo("london","").subscribe(
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(400);
        expect(error.error).toContain('Something went wrong, please try again later!');
      }
    );

    const testRequest = httpTestingController.expectOne('https://api.openweathermap.org/data/2.5/weather?q=london,&APPID=7a211c68435846ab04153a9d815b09f3&units=metric');

    // Respond with mock error
    testRequest.flush('error', { status: 400, statusText: 'Something went wrong, please try again later!' });
    
  });

  it('getWeatherForecast should use GET to retrieve data', () => {
    service.getWeatherForecast(123,456).subscribe();
    const testRequest = httpTestingController.expectOne('https://api.openweathermap.org/data/2.5/onecall?lat=123&lon=456&exclude=hourly&&APPID=7a211c68435846ab04153a9d815b09f3&units=metric');
    expect(testRequest.request.method).toEqual('GET');
  });  

  it('getWeatherForecast should return expected data', (done) => {
    const expectedData: WeatherItem[] = [
    ];

    service.getWeatherForecast(123,456).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
    
    const testRequest = httpTestingController.expectOne('https://api.openweathermap.org/data/2.5/onecall?lat=123&lon=456&exclude=hourly&&APPID=7a211c68435846ab04153a9d815b09f3&units=metric');
    testRequest.flush(expectedData);
    
  });

  it('getWeatherForecast should return 404 error', () => {
    service.getWeatherForecast(123,456).subscribe(
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toContain('Weather details are not found');
      }
    );

    const testRequest = httpTestingController.expectOne('https://api.openweathermap.org/data/2.5/onecall?lat=123&lon=456&exclude=hourly&&APPID=7a211c68435846ab04153a9d815b09f3&units=metric');

    // Respond with mock error
    testRequest.flush('error', { status: 404, statusText: 'Weather details are not found' });
    
  });

  it('getWeatherForecast should return 500 error', () => {
    service.getWeatherForecast(123,456).subscribe(
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(500);
        expect(error.error).toContain('Something went wrong, please try again later!');
      }
    );

    const testRequest = httpTestingController.expectOne('https://api.openweathermap.org/data/2.5/onecall?lat=123&lon=456&exclude=hourly&&APPID=7a211c68435846ab04153a9d815b09f3&units=metric');

    // Respond with mock error
    testRequest.flush('error', { status: 500, statusText: 'Something went wrong, please try again later!' });
    
  });

  it('getWeatherForecast should return any error', () => {
    service.getWeatherForecast(123,456).subscribe(
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(400);
        expect(error.error).toContain('Something went wrong, please try again later!');
      }
    );

    const testRequest = httpTestingController.expectOne('https://api.openweathermap.org/data/2.5/onecall?lat=123&lon=456&exclude=hourly&&APPID=7a211c68435846ab04153a9d815b09f3&units=metric');

    // Respond with mock error
    testRequest.flush('error', { status: 400, statusText: 'Something went wrong, please try again later!' });
    
  });

});
