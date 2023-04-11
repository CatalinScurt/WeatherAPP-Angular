import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, tap } from 'rxjs';
import { Current, Weather } from '../interfaces/Weather';
import { ThemeService } from './theme.service';
import { codeToTheme } from 'src/CodeToTheme';
import { Theme } from '../interfaces/Theme';
import { day, night } from '../theme';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  defaultLocation = 'Cluj-Napoca'
  weather?: Weather

  constructor(
    private apiService: ApiService,
    private themeService: ThemeService
  ) { }

  /**
     * GetWeather Function
     * @param query the querry params
     * @returns Observable
     */
  getWeather = (query: string): Observable<Weather> => {
    return this.apiService.get(query, 7).pipe(
      tap((response: Weather) => {
        this.weather = response
        this.checkForWeatherCode(response.current)
      })
    )
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
