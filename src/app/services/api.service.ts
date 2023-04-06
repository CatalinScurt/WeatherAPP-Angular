import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { CurrentWeather } from '../interfaces/CurrentWeather';
import { Weather } from '../interfaces/Weather';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  baseURL: string = environment.baseURL
  apiKey: string = environment.apiKey
  units: string = 'metric'

  baseUrl: string = environment.baseUrl
  apiKEY: string = environment.apiKEY
  extra: string = '&aqi=no&alerts=no'

  /**
     * Get Function
     * @param query the querry params
     * @returns Observable
     */
  get(query: string): Observable<CurrentWeather> {
    return this.httpClient.get<CurrentWeather>(`${this.baseURL}${query}&appid=${this.apiKey}&units=${this.units}`)
  }

  /**
     * Get Function
     * @param query the querry params
     * @returns Observable
     */
  gett(query: string, days: number): Observable<Weather> {
    return this.httpClient.get<Weather>(`${this.baseUrl}key=${this.apiKEY}&q=${query}&days=${days}&${this.extra}`)
  }


  getTest(query: string): Observable<any> {
    // return this.httpClient.get(`http://api.weatherapi.com/v1/current.json?key=b8728d0881cd4fa6acc53116230504&q=${query}&aqi=no
    // `)
    return this.httpClient.get(`http://api.weatherapi.com/v1/forecast.json?key=b8728d0881cd4fa6acc53116230504&q=${query}&days=3&aqi=no
    `)
  }
}
