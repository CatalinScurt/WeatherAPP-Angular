import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/interfaces/Weather';

@Component({
  selector: 'app-daily-slider',
  templateUrl: './daily-slider.component.html',
  styleUrls: ['./daily-slider.component.scss']
})
export class DailySliderComponent implements OnInit {

  Math = Math

  constructor() { }

  @Input() weather?: Weather
  weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  weekDaysWithoutToday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  currentDay = new Date().getDay()
  currentPosition: number = 100

  ngOnInit(): void {
    this.weekDaysWithoutToday = this.weekDays.filter((day, index) => index !== this.currentDay)
  }

  handleOnClickNextDay = () => {
    this.weather && this.currentPosition < (this.weather?.forecast.forecastday.length - 1) * 100 ? this.currentPosition += 100 : this.currentPosition = 100
  }
  handleOnClickPrevDay = () => {
    (this.currentPosition > 100) ? (this.currentPosition -= 100) : (this.currentPosition = ((this.weather?.forecast.forecastday.length || 0) - 1) * 100)
  }

  getPosition = () => {
    return { 'transform': `translateX(${-this.currentPosition}%)` }
  }
}
