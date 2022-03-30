import { TestBed } from '@angular/core/testing';
import { WeatherItem } from "../item/weather-item";

describe('WeatherItem', () => {
    let weatherItem: WeatherItem;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [WeatherItem]
        });
        weatherItem = new WeatherItem(new Date,"","",0,"",0,0,0,0);
      });
  it('should create an instance', () => {
    expect(weatherItem).toBeTruthy();
  });
});
