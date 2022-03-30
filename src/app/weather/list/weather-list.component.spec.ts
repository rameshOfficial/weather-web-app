import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherListComponent } from './weather-list.component';
import { WeatherService } from '../weather.service';
import {HttpClientModule} from '@angular/common/http';

describe('WeatherListComponent', () => {
  let component: WeatherListComponent;
  let fixture: ComponentFixture<WeatherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [HttpClientModule],
      declarations: [ WeatherListComponent ],
      providers: [WeatherService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sortByDate to sort the weather data by date', () => {
    
    component.weatherItems = [{dateInMillis:1648532460},{dateInMillis:1648532520},{dateInMillis:1648532580}] as any;
    const expected = [{dateInMillis:1648532580},{dateInMillis:1648532520},{dateInMillis:1648532460}] as any
    component.sortByAsc = false;
    component.sortByDate()
    expect(component.weatherItems).toEqual(expected);
  });
});
