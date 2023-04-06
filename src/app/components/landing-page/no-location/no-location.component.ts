import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrentWeather } from 'src/app/interfaces/CurrentWeather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-no-location',
  templateUrl: './no-location.component.html',
  styleUrls: ['./no-location.component.scss']
})
export class NoLocationComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getWeatherFromDefaultLocation = () => {
    let query = `q=${this.weatherService.defaultLocation}`
    this.weatherService.getCurrentWeather(query)
  }
}
