import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { customIcons } from 'src/CustomIcons';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }
  customIcons = customIcons
  searchValue = ''

  weather?: any

  ngOnInit(): void {
    console.log(customIcons['1000'], "qwe")
  }

  inputChange = (event: any) => {
    this.searchValue = event.target.value
  }

  handleSearch = () => {
    this.weatherService.fetchTest(this.searchValue).subscribe({
      next: response => {
        this.weather = response.forecast.forecastday
        console.log(response)
        // response.forecast.forecastday.forEach((element: any) => {
        //   // console.log(element.hour[0].condition.icon)
        //   element.hour.forEach((hour: any) => {
        //     console.log(hour.condition.icon)
        //   })
        // });

      }
    })
  }
}
