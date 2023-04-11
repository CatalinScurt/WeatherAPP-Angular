import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Weather } from 'src/app/interfaces/Weather';

@Component({
  selector: 'app-today-details',
  templateUrl: './today-details.component.html',
  styleUrls: ['./today-details.component.scss']
})
export class TodayDetailsComponent implements OnInit {

  Math = Math

  constructor() { }

  @Input() weather?: Weather
  @Input() routeParam?: string
  @Input() favoriteCities?: string[]
  @Output() handleOnOpenSearchModal = new EventEmitter<boolean>()

  ngOnInit(): void {
  }

  openSearchModal = () => {
    this.handleOnOpenSearchModal.emit(true)
  }
}
