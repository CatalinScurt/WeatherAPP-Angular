import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { CurrentWeather } from '../interfaces/CurrentWeather';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  baseURL: string = environment.baseURL
  apiKey: string = environment.apiKey
  units: string = 'metric'

  /**
     * Get Function
     * @param query the querry params
     * @returns Observable
     */
  get(query: string): Observable<CurrentWeather> {
    return this.httpClient.get<CurrentWeather>(`${this.baseURL}${query}&appid=${this.apiKey}&units=${this.units}`)
  }

  getTest(query: string): Observable<any> {
    // return this.httpClient.get(`http://api.weatherapi.com/v1/current.json?key=b8728d0881cd4fa6acc53116230504&q=${query}&aqi=no
    // `)
    return this.httpClient.get(`http://api.weatherapi.com/v1/forecast.json?key=b8728d0881cd4fa6acc53116230504&q=${query}&days=3&aqi=no
    `)
  }
}
