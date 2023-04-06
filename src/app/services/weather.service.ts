import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, Subject } from 'rxjs';
import { CurrentWeather } from '../interfaces/CurrentWeather';
import { Weather } from '../interfaces/Weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  defaultLocation = 'Cluj'
  currentWeather?: CurrentWeather
  weather?: Weather

  handleOnSetCurrentWeather: Subject<CurrentWeather> = new Subject<CurrentWeather>()
  handleOnSetWeather: Subject<Weather> = new Subject<Weather>()

  constructor(private apiService: ApiService) {
    this.handleOnSetCurrentWeather.subscribe((value: CurrentWeather) => {
      console.log(value.weather[0], "from service")
      this.currentWeather = value
    })
    this.handleOnSetWeather.subscribe((value: Weather) => {
      this.weather = value
      console.log(this.weather.forecast.forecastday[0].hour, "service")
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
}
