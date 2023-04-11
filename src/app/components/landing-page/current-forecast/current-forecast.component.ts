import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Weather } from 'src/app/interfaces/Weather';


@Component({
  selector: 'app-current-forecast',
  templateUrl: './current-forecast.component.html',
  styleUrls: ['./current-forecast.component.scss']
})
export class CurrentForecastComponent implements OnInit {

  faHeart = faHeart

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      if (params['city']) this.routeParam = params['city']
    })
  }

  @Input() weather?: Weather
  @Output() updateSearchModalState = new EventEmitter<boolean>()
  routeParam?: string
  favoriteCities: string[] = []

  ngOnInit(): void {
    this.getFavouriteCities()
  }

  getFavouriteCities = () => {
    const localStorageItems = localStorage.getItem('favoriteCities')
    if (localStorageItems) this.favoriteCities = JSON.parse(localStorageItems)
  }

  handleOnClickHeartButton = () => {
    if (this.weather && !this.favoriteCities.includes(this.weather?.location.name)) {
      this.favoriteCities.push(this.weather?.location.name)
      localStorage.setItem('favoriteCities', JSON.stringify(this.favoriteCities))
    } else {
      this.favoriteCities = this.favoriteCities.filter(city => city !== this.weather?.location.name)
      localStorage.setItem('favoriteCities', JSON.stringify(this.favoriteCities))
    }
  }

  openSearchModal = (event: boolean) => {
    this.updateSearchModalState.emit(event)
  }

  getHeartColor = () => {
    return {
      'color': this.weather && this.favoriteCities.includes(this.weather?.location.name) ? 'red' : 'white'
    }
  }
}