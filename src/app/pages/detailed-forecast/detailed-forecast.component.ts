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

  weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  currentDay = new Date().getDay()

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {
    this.route.params.subscribe((params) => {
      if (params['city']) {
        console.log(params['city'])
        this.routeParam = params['city']
      }
    })

    this.weatherService.handleOnSetWeather.subscribe((data: Weather) => {
      this.weather = this.weatherFilter(JSON.parse(JSON.stringify(data)) as Weather) // send for filter a copy of object
    })
  }
  Number = Number
  Math = Math
  routeParam: string = ''
  currentPosition: number = 100

  weather?: Weather


  list12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2]
  list6 = [1, 2, 3, 4, 5, 6]

  ngOnInit(): void {
    this.setWeather()
  }

  setWeather = () => {
    this.routeParam.toLocaleLowerCase() === this.weatherService.weather?.location.name.toLocaleLowerCase() ?
      this.weather = this.weatherFilter(JSON.parse(JSON.stringify(this.weatherService.weather)) as Weather) :
      this.weatherService.getWeather(this.routeParam)
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

  handleOnClickNextDay = () => {
    this.weather && this.currentPosition < (this.weather?.forecast.forecastday.length - 1) * 100 ? this.currentPosition += 100 : this.currentPosition = 100
  }
  handleOnClickPrevDay = () => {
    (this.currentPosition > 100) ? (this.currentPosition -= 100) : (this.currentPosition = ((this.weather?.forecast.forecastday.length || 0) - 1) * 100)
  }

  getPosition = () => {
    return { 'transform': `translateX(${-this.currentPosition}%)` }
  }
}
