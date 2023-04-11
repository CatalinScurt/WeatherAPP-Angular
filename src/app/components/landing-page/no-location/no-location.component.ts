import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Weather } from 'src/app/interfaces/Weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-no-location',
  templateUrl: './no-location.component.html',
  styleUrls: ['./no-location.component.scss']
})
export class NoLocationComponent implements OnInit {

  constructor(
    private weatherService: WeatherService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  getWeatherFromDefaultLocation = () => {
    let query = this.weatherService.defaultLocation
    this.weatherService.getWeather(query).subscribe({
      next: (reponse: Weather) => this.route.navigate([`/city/${this.weatherService.defaultLocation}`])
    })
  }
}
