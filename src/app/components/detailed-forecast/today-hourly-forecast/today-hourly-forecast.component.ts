import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/interfaces/Weather';

@Component({
  selector: 'app-today-hourly-forecast',
  templateUrl: './today-hourly-forecast.component.html',
  styleUrls: ['./today-hourly-forecast.component.scss']
})
export class TodayHourlyForecastComponent implements OnInit {

  Number = Number
  Math = Math

  constructor() { }

  @Input() weather?: Weather

  ngOnInit(): void {
  }

}
