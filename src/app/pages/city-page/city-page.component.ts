import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    // weatherService.handleOnSetWeather.subscribe((data: Weather) => this.weather = data)
  }

  weather?: Weather
  isSearchModalOpened: boolean = false
  routeParam: string = ''
  requestError: boolean = false

  ngOnInit(): void {
    this.checkRouteParams()
  }

  checkRouteParams = () => {
    this.route.params.subscribe((params) => {
      if (params['city']) {
        this.routeParam = params['city']
        this.setWeather()
      }
    })
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;  //for refresh content on navigate in the same page
  }

  setWeather = () => {

    // this.routeParam.toLocaleLowerCase() === this.weatherService.weather?.location.name.toLocaleLowerCase() ?
    //   this.weather = this.weatherService.weather :
    //   this.weatherService.getWeather(this.routeParam)
    this.routeParam.toLocaleLowerCase() === this.weatherService.weather?.location.name.toLocaleLowerCase() ?
      this.weather = this.weatherService.weather :
      this.weatherService.getWeather(this.routeParam).subscribe({
        next: (response: Weather) => this.weather = response,
        error: (error: any) => this.requestError = true
      })
  }

  handleOnChangeSearchModalState = (event: boolean) => {
    this.isSearchModalOpened = event
  }
}
