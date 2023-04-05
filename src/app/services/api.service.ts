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
}
