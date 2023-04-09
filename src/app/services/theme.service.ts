import { Injectable } from '@angular/core';
import { day, night } from '../theme';
import { Theme } from '../interfaces/Theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  setActiveTheme = (theme: Theme, weather: keyof typeof theme) => {
    let newTheme = theme[weather]
    let key: keyof typeof newTheme
    console.log('set theme is called')
    for (key in newTheme) {
      document.documentElement.style.setProperty(key, newTheme[key])
    }
  }

}
