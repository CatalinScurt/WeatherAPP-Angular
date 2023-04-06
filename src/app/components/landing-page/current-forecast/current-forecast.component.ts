import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { CurrentWeather } from 'src/app/interfaces/CurrentWeather';
import { Weather } from 'src/app/interfaces/Weather';

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
  faMapMarkerAlt = faMapMarkerAlt
  routeParam: string = ''
  constructor(
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      if (params['city']) {
        this.routeParam = params['city']
      }
    })
  }

  currentForecastIcon = customWeatherIcons['01d']

  // @Input() currentWeather?: CurrentWeather
  @Input() weather?: Weather

  iconList: any = []
  @Output() updateSearchModalState = new EventEmitter<boolean>()

  ngOnInit(): void {
    // this.changeWeatherIcon()
    // console.log(this.currentWeather?.weather[0], 'from Curent')
  }

  // changeWeatherIcon = () => {
  //   let key: keyof typeof customWeatherIcons

  //   for (key in customWeatherIcons) {
  //     this.iconList.push(customWeatherIcons[key])
  //     if (this.currentWeather?.weather[0].icon === key) {
  //       this.currentForecastIcon = customWeatherIcons[key]
  //     }
  //   }
  // }

  openSearchModal = () => {
    this.updateSearchModalState.emit(true)
  }

}
