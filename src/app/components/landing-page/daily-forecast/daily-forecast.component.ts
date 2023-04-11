import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/interfaces/Weather';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss']
})
export class DailyForecastComponent implements OnInit {
  Math = Math
  constructor() { }

  @Input() weather?: Weather
  weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  currentDay = new Date().getDay()

  ngOnInit(): void {
  }

}
