import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather } from 'src/app/interfaces/Weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-detailed-forecast',
  templateUrl: './detailed-forecast.component.html',
  styleUrls: ['./detailed-forecast.component.scss']
})
export class DetailedForecastComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {
    this.route.params.subscribe((params) => {
      if (params['city']) this.routeParam = params['city']
    })
  }

  routeParam: string = ''
  weather?: Weather
  requestError: boolean = false

  ngOnInit(): void {
    this.setWeather()
  }

  setWeather = () => {
    this.routeParam.toLocaleLowerCase() === this.weatherService.weather?.location.name.toLocaleLowerCase() ?
      this.weather = this.weatherFilter(JSON.parse(JSON.stringify(this.weatherService.weather)) as Weather) :
      this.weatherService.getWeather(this.routeParam).subscribe({
        next: (response: Weather) => this.weather = this.weatherFilter(JSON.parse(JSON.stringify(response)) as Weather), // send for filter a copy of object
        error: (error: any) => this.requestError = true
      })
  }

  /**
   * weather filter Function
   * @param data data in Weather format (with 24 hour items array)
   * @returns data in Weather format (with 12 hour items array)
   */
  weatherFilter = (data: Weather) => {  //this function changes the forecast from every hour to every two hours
    let toReturn = data
    let dailyWeather = toReturn.forecast.forecastday
    for (let i = 0; i < dailyWeather.length; i++) {
      let newDay = dailyWeather[i].hour.filter((hour, index) => index % 2 === 0)
      dailyWeather[i].hour = newDay
    }
    toReturn.forecast.forecastday = dailyWeather
    return toReturn
  }
}
