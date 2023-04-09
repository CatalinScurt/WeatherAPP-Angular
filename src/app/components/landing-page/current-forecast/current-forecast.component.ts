import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHeart, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { CurrentWeather } from 'src/app/interfaces/CurrentWeather';
import { Theme } from 'src/app/interfaces/Theme';
import { Weather } from 'src/app/interfaces/Weather';
import { ThemeService } from 'src/app/services/theme.service';
import { day, night } from 'src/app/theme';
import { codeToTheme } from 'src/CodeToTheme';
import { customWeatherIcons } from 'src/CustomWeatherIcons';


@Component({
  selector: 'app-current-forecast',
  templateUrl: './current-forecast.component.html',
  styleUrls: ['./current-forecast.component.scss']
})
export class CurrentForecastComponent implements OnInit {

  math = Math
  faHeart = faHeart
  routeParam?: string
  weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  currentDay = new Date().getDay()

  constructor(private route: ActivatedRoute) {
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

  favoriteCities: string[] = []

  ngOnInit(): void {
    // this.changeWeatherIcon()
    // console.log(this.currentWeather?.weather[0], 'from Curent')
    const localStorageItems = localStorage.getItem('favoriteCities')
    if (localStorageItems) this.favoriteCities = JSON.parse(localStorageItems)
    console.log(this.favoriteCities)
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
  handleOnClickHeartButton = () => {
    if (this.weather && !this.favoriteCities.includes(this.weather?.location.name)) {
      this.favoriteCities.push(this.weather?.location.name)
      localStorage.setItem('favoriteCities', JSON.stringify(this.favoriteCities))
    } else {
      this.favoriteCities = this.favoriteCities.filter(city => city !== this.weather?.location.name)
      localStorage.setItem('favoriteCities', JSON.stringify(this.favoriteCities))
    }
  }

  openSearchModal = () => {
    this.updateSearchModalState.emit(true)
  }

  getHeartColor = () => {
    return {
      'color': this.weather && this.favoriteCities.includes(this.weather?.location.name) ? 'red' : 'white'
    }
  }

}


// poaie
// soare
// noros
// zapada