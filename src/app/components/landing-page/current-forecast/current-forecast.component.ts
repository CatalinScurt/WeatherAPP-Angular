import { Component, OnInit, Input } from '@angular/core';
import { CurrentWeather } from 'src/app/interfaces/CurrentWeather';

// import {
//   faCloudRain,
//   faCloudSunRain,
//   faMoon,
//   faSnowflake,
//   faCloudMoonRain,
//   faCloud,
//   faPooStorm,
//   faSmog,
//   faStream,
//   faCloudSun,
//   faCloudMoon
// } from '@fortawesome/free-solid-svg-icons';
// // import { faSun } from '@fortawesome/free-regular-svg-icons'
// // import { faSun } from '@fortawesome/angular-fontawesome';
// // import {  faSun} from '@fortawesome/fontawesome-svg-core';
// // import { faSun } from '@fortawesome/free-brands-svg-icons';
// // import { faSun } from '@fortawesome/free-regular-svg-icons'
// import { faSun } from '@fortawesome/free-solid-svg-icons'

import { customWeatherIcons } from 'src/CustomWeatherIcons';


@Component({
  selector: 'app-current-forecast',
  templateUrl: './current-forecast.component.html',
  styleUrls: ['./current-forecast.component.scss']
})
export class CurrentForecastComponent implements OnInit {

  math = Math
  customWeatherIcons = customWeatherIcons
  constructor() { }

  currentForecastIcon = customWeatherIcons['01d']

  @Input() currentWeather?: CurrentWeather

  iconList: any = []

  ngOnInit(): void {
    this.changeWeatherIcon()
  }

  changeWeatherIcon = () => {
    let key: keyof typeof customWeatherIcons

    for (key in customWeatherIcons) {
      this.iconList.push(customWeatherIcons[key])
      if (this.currentWeather?.weather[0].icon === key) {
        this.currentForecastIcon = customWeatherIcons[key]
      }
    }
  }

}
