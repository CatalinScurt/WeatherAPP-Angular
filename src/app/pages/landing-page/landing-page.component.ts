import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/app/interfaces/Weather';
import { ThemeService } from 'src/app/services/theme.service';
import { day, night } from 'src/theme';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private weatherService: WeatherService,
    private themeService: ThemeService
  ) { }

  weather?: Weather
  isSearchModalOpened: boolean = false

  ngOnInit(): void {
    this.getPosition()
    // this.themeService.setActiveTheme(night, 'clear')  //for theme tests
  }

  getPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (response) => this.getWeatherForCurrentLocation(response.coords.latitude, response.coords.longitude),
      (err) => console.log(err)
    )
  }

  getWeatherForCurrentLocation = (lat: number, lon: number) => {
    let query = `${lat},${lon}`
    this.weatherService.getWeather(query).subscribe({
      next: (response: Weather) => this.weather = response,
      error: (error: any) => console.log(error)
    })
  }

  handleOnChangeSearchModalState = (event: boolean) => {
    this.isSearchModalOpened = event
  }
}
