import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Weather } from '../interfaces/Weather';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = environment.baseUrl
  apiKEY: string = environment.apiKEY
  extra: string = '&aqi=no&alerts=no'

  /**
     * Get Function
     * @param query the querry params
     * @returns Observable
     */
  get(query: string, days: number): Observable<Weather> {
    return this.httpClient.get<Weather>(
      `${this.baseUrl}key=${this.apiKEY}&q=${query}&days=${days}&${this.extra}`
    )
  }
}
