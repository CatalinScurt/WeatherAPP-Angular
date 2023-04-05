import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Subject } from 'rxjs';
import { CurrentWeather } from 'src/app/interfaces/CurrentWeather';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private weatherService: WeatherService
  ) {
    this.weatherService.handleOnSetCurrentWeather.subscribe(
      (data: CurrentWeather) => this.currentWeather = data
    )
  }

  currentWeather?: CurrentWeather

  ngOnInit(): void {
    this.getPosition()
  }

  getPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (response) => {
        this.getWeatherForCurrentLocation(response.coords.latitude, response.coords.longitude)
      },
      (err) => console.log(err)
    )
  }

  getWeatherForCurrentLocation = (lat: number, lon: number) => {
    let query = `lat=${lat}&lon=${lon}`
    this.weatherService.getCurrentWeather(query)
  }
}
