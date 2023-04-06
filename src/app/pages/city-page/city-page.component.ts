import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrentWeather } from 'src/app/interfaces/CurrentWeather';
import { Weather } from 'src/app/interfaces/Weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.scss']
})
export class CityPageComponent implements OnInit {

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    // weatherService.handleOnSetCurrentWeather.subscribe((data: CurrentWeather) => {
    //   this.currentWeather = data
    // })
    weatherService.handleOnSetWeather.subscribe((data: Weather) => {
      this.weather = data
    })
  }

  weather?: Weather
  // currentWeather?: CurrentWeather
  isSearchModalOpened: boolean = false
  routeParam: string = ''

  ngOnInit(): void {
    this.checkRouteParams()
  }

  checkRouteParams = () => {
    this.route.params.subscribe((params) => {
      if (params['city']) {
        this.routeParam = params['city']
        let query = `${params['city']}`
        this.setWeather(query)
      }
    })
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;  //for refresh content on navigate in the same page
  }

  setWeather = (query: string) => {
    this.routeParam.toLocaleLowerCase() === this.weatherService.weather?.location.name.toLocaleLowerCase() ?
      this.weather = this.weatherService.weather :
      this.weatherService.getWeather(this.routeParam)
  }

  handleOnChangeSearchModalState = (event: boolean) => {
    this.isSearchModalOpened = event
  }
}
