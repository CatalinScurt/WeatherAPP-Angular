import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {

  faWindowClose = faWindowClose

  constructor(private route: Router) { }

  @Output() updateSearchModalState = new EventEmitter<boolean>()
  searchInputValue: string = ''
  closing: boolean = false

  ngOnInit(): void {
  }

  handleChangeSearchInput = (event: KeyboardEvent) => {
    this.searchInputValue = (event.target as HTMLInputElement).value
  }

  searchForLocation = () => {
    this.updateSearchModalState.emit(false)
    this.route.navigate([`city/${this.searchInputValue}`])
  }

  handleOnCloseSearchModal = () => {
    this.closing = true

    setTimeout(() => {
      this.updateSearchModalState.emit(false)
    }, 1000);
  }

  stopPropagation = (event: MouseEvent) => {
    event.stopPropagation()
  }
}
