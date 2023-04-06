import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrentWeather } from 'src/app/interfaces/CurrentWeather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.scss']
})
export class CityPageComponent implements OnInit {

  constructor(private weatherService: WeatherService, private route: ActivatedRoute, private router: Router) {

    weatherService.handleOnSetCurrentWeather.subscribe((data: CurrentWeather) => {
      this.currentWeather = data
    })
  }

  currentWeather?: CurrentWeather
  isSearchModalOpened: boolean = false

  ngOnInit(): void {
    this.checkRouteParams()
  }

  checkRouteParams = () => {
    this.route.params.subscribe((params) => {
      if (params['city']) {
        let query = `q=${params['city']}`
        this.weatherService.getCurrentWeather(query)
      }
    })
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;  //for refresh content on navigate in the same page
  }

  handleOnChangeSearchModalState = (event: boolean) => {
    this.isSearchModalOpened = event
  }
}
