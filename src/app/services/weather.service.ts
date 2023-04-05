import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, Subject } from 'rxjs';
import { CurrentWeather } from '../interfaces/CurrentWeather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  defaultLocation = 'Cluj'
  currentWeather?: CurrentWeather

  handleOnSetCurrentWeather: Subject<CurrentWeather> = new Subject<CurrentWeather>()

  constructor(private apiService: ApiService) {
    this.handleOnSetCurrentWeather.subscribe((value: CurrentWeather) => {
      console.log(value.weather[0], "from service")
      this.currentWeather = value
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
}
