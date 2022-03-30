import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSearchComponent } from './weather-search.component';
import { WeatherService } from '../weather.service';
import {HttpClientModule} from '@angular/common/http';
import { of } from 'rxjs';

class MockWeatherService {
  searchWeatherInfo(city: string, country: string) {
    return of({"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09n"}],"base":"stations","main":{"temp":7.46,"feels_like":5.1,"temp_min":6.42,"temp_max":8.76,"pressure":1014,"humidity":91},"visibility":4600,"wind":{"speed":3.6,"deg":60},"clouds":{"all":20},"dt":1648532383,"sys":{"type":2,"id":2019646,"country":"GB","sunrise":1648532574,"sunset":1648578449},"timezone":3600,"id":2643743,"name":"London","cod":200});
  }

  getWeatherForecast(lat: number, lan: number) {
    return of({"lat":51.5085,"lon":-0.1257,"timezone":"Europe/London","timezone_offset":3600,"current":{"dt":1648532403,"sunrise":1648532574,"sunset":1648578449,"temp":7.46,"feels_like":5.1,"pressure":1014,"humidity":91,"dew_point":6.09,"uvi":0,"clouds":20,"visibility":4600,"wind_speed":3.6,"wind_deg":60,"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09n"}]},"minutely":[{"dt":1648532460,"precipitation":0},{"dt":1648532520,"precipitation":0},{"dt":1648532580,"precipitation":0},{"dt":1648532640,"precipitation":0},{"dt":1648532700,"precipitation":0},{"dt":1648532760,"precipitation":0},{"dt":1648532820,"precipitation":0},{"dt":1648532880,"precipitation":0},{"dt":1648532940,"precipitation":0},{"dt":1648533000,"precipitation":0},{"dt":1648533060,"precipitation":0},{"dt":1648533120,"precipitation":0},{"dt":1648533180,"precipitation":0},{"dt":1648533240,"precipitation":0},{"dt":1648533300,"precipitation":0},{"dt":1648533360,"precipitation":0},{"dt":1648533420,"precipitation":0},{"dt":1648533480,"precipitation":0},{"dt":1648533540,"precipitation":0},{"dt":1648533600,"precipitation":0},{"dt":1648533660,"precipitation":0},{"dt":1648533720,"precipitation":0},{"dt":1648533780,"precipitation":0},{"dt":1648533840,"precipitation":0},{"dt":1648533900,"precipitation":0},{"dt":1648533960,"precipitation":0},{"dt":1648534020,"precipitation":0},{"dt":1648534080,"precipitation":0},{"dt":1648534140,"precipitation":0},{"dt":1648534200,"precipitation":0},{"dt":1648534260,"precipitation":0},{"dt":1648534320,"precipitation":0},{"dt":1648534380,"precipitation":0},{"dt":1648534440,"precipitation":0},{"dt":1648534500,"precipitation":0},{"dt":1648534560,"precipitation":0},{"dt":1648534620,"precipitation":0},{"dt":1648534680,"precipitation":0},{"dt":1648534740,"precipitation":0},{"dt":1648534800,"precipitation":0},{"dt":1648534860,"precipitation":0},{"dt":1648534920,"precipitation":0},{"dt":1648534980,"precipitation":0},{"dt":1648535040,"precipitation":0},{"dt":1648535100,"precipitation":0},{"dt":1648535160,"precipitation":0},{"dt":1648535220,"precipitation":0},{"dt":1648535280,"precipitation":0},{"dt":1648535340,"precipitation":0},{"dt":1648535400,"precipitation":0},{"dt":1648535460,"precipitation":0},{"dt":1648535520,"precipitation":0},{"dt":1648535580,"precipitation":0},{"dt":1648535640,"precipitation":0},{"dt":1648535700,"precipitation":0},{"dt":1648535760,"precipitation":0},{"dt":1648535820,"precipitation":0},{"dt":1648535880,"precipitation":0},{"dt":1648535940,"precipitation":0},{"dt":1648536000,"precipitation":0},{"dt":1648536060,"precipitation":0}],"daily":[{"dt":1648555200,"sunrise":1648532574,"sunset":1648578449,"moonrise":1648531020,"moonset":1648565820,"moon_phase":0.9,"temp":{"day":11.2,"min":7.46,"max":11.93,"night":8.18,"eve":9.91,"morn":7.46},"feels_like":{"day":10.23,"night":5.98,"eve":7.86,"morn":5.45},"pressure":1011,"humidity":71,"dew_point":6.08,"wind_speed":4.22,"wind_deg":40,"wind_gust":8.36,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":0.69,"rain":0.64,"uvi":1.25},{"dt":1648641600,"sunrise":1648618836,"sunset":1648664948,"moonrise":1648618500,"moonset":1648657140,"moon_phase":0.94,"temp":{"day":10.21,"min":1.03,"max":10.99,"night":1.03,"eve":7.38,"morn":4.81},"feels_like":{"day":8.72,"night":-4.14,"eve":5.27,"morn":2.75},"pressure":1007,"humidity":55,"dew_point":1.46,"wind_speed":6.23,"wind_deg":37,"wind_gust":14.47,"weather":[{"id":616,"main":"Snow","description":"rain and snow","icon":"13d"}],"clouds":94,"pop":1,"rain":5.77,"snow":7.76,"uvi":2.04},{"dt":1648728000,"sunrise":1648705099,"sunset":1648751448,"moonrise":1648705800,"moonset":1648748220,"moon_phase":0.97,"temp":{"day":4.8,"min":1,"max":5.56,"night":2.01,"eve":3.52,"morn":1.47},"feels_like":{"day":0.65,"night":-2.03,"eve":-0.75,"morn":-3.16},"pressure":1011,"humidity":75,"dew_point":0.6,"wind_speed":6.43,"wind_deg":18,"wind_gust":14.09,"weather":[{"id":616,"main":"Snow","description":"rain and snow","icon":"13d"}],"clouds":94,"pop":1,"rain":0.74,"snow":9.99,"uvi":2.12},{"dt":1648814400,"sunrise":1648791362,"sunset":1648837948,"moonrise":1648792980,"moonset":1648839240,"moon_phase":0,"temp":{"day":7.81,"min":0.38,"max":8.33,"night":3.65,"eve":6.28,"morn":0.38},"feels_like":{"day":4.48,"night":1.02,"eve":3.4,"morn":-3.8},"pressure":1020,"humidity":34,"dew_point":-7.06,"wind_speed":5.96,"wind_deg":18,"wind_gust":10.96,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":26,"pop":0.08,"uvi":2.93},{"dt":1648900800,"sunrise":1648877626,"sunset":1648924448,"moonrise":1648880220,"moonset":1648930140,"moon_phase":0.04,"temp":{"day":8.01,"min":1.02,"max":8.39,"night":4.7,"eve":6.78,"morn":1.02},"feels_like":{"day":6.25,"night":3.81,"eve":5.27,"morn":-0.91},"pressure":1022,"humidity":47,"dew_point":-2.78,"wind_speed":2.85,"wind_deg":360,"wind_gust":6.55,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":41,"pop":0.82,"rain":0.81,"uvi":3.03},{"dt":1648987200,"sunrise":1648963889,"sunset":1649010948,"moonrise":1648967460,"moonset":1649020980,"moon_phase":0.07,"temp":{"day":8.37,"min":1.58,"max":8.55,"night":4.85,"eve":7.08,"morn":1.58},"feels_like":{"day":7.09,"night":3.34,"eve":6.03,"morn":0.27},"pressure":1021,"humidity":39,"dew_point":-4.8,"wind_speed":2.34,"wind_deg":38,"wind_gust":3.72,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":9,"pop":0.38,"rain":0.13,"uvi":4},{"dt":1649073600,"sunrise":1649050153,"sunset":1649097448,"moonrise":1649054880,"moonset":1649111880,"moon_phase":0.1,"temp":{"day":10.1,"min":2.12,"max":10.1,"night":7.41,"eve":9.23,"morn":2.12},"feels_like":{"day":8.55,"night":3.93,"eve":6.58,"morn":-0.48},"pressure":1019,"humidity":53,"dew_point":0.79,"wind_speed":6.08,"wind_deg":267,"wind_gust":13.47,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":85,"pop":0.26,"rain":0.12,"uvi":4},{"dt":1649160000,"sunrise":1649136418,"sunset":1649183948,"moonrise":1649142480,"moonset":0,"moon_phase":0.13,"temp":{"day":12.83,"min":7.65,"max":15.04,"night":10.88,"eve":12.36,"morn":8.72},"feels_like":{"day":12.1,"night":10.19,"eve":11.58,"morn":5.66},"pressure":1011,"humidity":74,"dew_point":8.15,"wind_speed":7.74,"wind_deg":285,"wind_gust":14.63,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":0.6,"rain":0.57,"uvi":4}]});
  }
  addWeatherItem(item: any) {
  }
  clearWeatherItems() {
    return [];
  }
}
describe('WeatherSearchComponent', () => {
  let service: MockWeatherService;
  let component: WeatherSearchComponent;
  let fixture: ComponentFixture<WeatherSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [HttpClientModule],
      declarations: [ WeatherSearchComponent ],
      providers: [{
        provide: WeatherService, useClass: MockWeatherService
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSearchComponent);
    component = fixture.componentInstance;
    service = new MockWeatherService();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSearch should get the weather results', () => {
    component.error = false;
    component.onSearch("London","");
    service.clearWeatherItems();
    service.searchWeatherInfo("London","").subscribe(data => {
      expect(component.error).toBeFalse()
    });
    
  });

  it('onSearch should get the weather throw error', () => {
    component.error = false;
    component.onSearch("Hyderabad","");
    service.searchWeatherInfo("Hyderabad","").subscribe(data => {
      expect(component.error).toBeTrue()
    });
    
  });

  it('addToItem should add the weather results to the item array', () => {
    const weatherItem = {"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09n"}],"base":"stations","main":{"temp":7.46,"feels_like":5.1,"temp_min":6.42,"temp_max":8.76,"pressure":1014,"humidity":91},"visibility":4600,"wind":{"speed":3.6,"deg":60},"clouds":{"all":20},"dt":1648532383,"sys":{"type":2,"id":2019646,"country":"GB","sunrise":1648532574,"sunset":1648578449},"timezone":3600,"id":2643743,"name":"London","cod":200};
    const data: any = {};
    const spy = spyOn(component,'transformForecastWeatherData');
    component.addToItem(weatherItem);
    service.getWeatherForecast(123,456).subscribe(data => {
      expect(spy).toHaveBeenCalled()
    });
  });
});
