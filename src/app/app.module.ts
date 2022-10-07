import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherListComponent } from './weather/list/weather-list.component';
import { WeatherSearchComponent } from './weather/search/weather-search.component';
import { WeatherService } from './weather/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    WeatherSearchComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}


