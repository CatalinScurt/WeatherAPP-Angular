import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, Subject } from 'rxjs';
import { CurrentWeather } from '../interfaces/CurrentWeather';
import { Current, Weather } from '../interfaces/Weather';
import { ThemeService } from './theme.service';
import { codeToTheme } from 'src/CodeToTheme';
import { Theme } from '../interfaces/Theme';
import { day, night } from '../theme';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  defaultLocation = 'Cluj'
  currentWeather?: CurrentWeather
  weather?: Weather

  handleOnSetCurrentWeather: Subject<CurrentWeather> = new Subject<CurrentWeather>()
  handleOnSetWeather: Subject<Weather> = new Subject<Weather>()

  constructor(
    private apiService: ApiService,
    private themeService: ThemeService
  ) {
    this.handleOnSetCurrentWeather.subscribe((value: CurrentWeather) => {
      console.log(value.weather[0], "from service")
      this.currentWeather = value
    })
    this.handleOnSetWeather.subscribe((value: Weather) => {
      this.weather = value
      console.log(this.weather.forecast.forecastday[0].hour, "service")
      this.checkForWeatherCode(value.current)
    })
  }

  /**
     * Get Function
     * @param query the querry params
     * @returns Observable
     */
  // getCurrentWeather(query: string): Observable<CurrentWeather> {
  //   return this.apiService.get(query)
  // }
  getCurrentWeather = (query: string) => {
    // return this.apiService.get(query)
    this.apiService.get(query).subscribe({
      next: (response) => this.handleOnSetCurrentWeather.next(response),
      error: (err) => console.log(err)
    })
  }

  /**
     * GetWeather Function
     * @param query the querry params
     * @returns Observable
     */
  getWeather = (query: string) => {
    this.apiService.gett(query, 7).subscribe({
      next: (response) => {
        console.log("response")
        this.handleOnSetWeather.next(response)
      },
      error: (err) => console.log(err)
    })
  }

  fetchTest = (query: string): Observable<any> => {
    return this.apiService.getTest(query)
  }

  checkForWeatherCode = (currentWeather: Current) => {
    let code = currentWeather.condition.code.toString()
    let key: keyof typeof codeToTheme
    for (key in codeToTheme)
      if (key === code)
        this.themeService.setActiveTheme(this.checkForDayOrNight(currentWeather.is_day), codeToTheme[key] as keyof Theme)
  }

  checkForDayOrNight = (isDay: number) => {
    return isDay === 1 ? day : night
  }

}
