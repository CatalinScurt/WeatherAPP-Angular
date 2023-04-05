import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NoLocationComponent } from './components/landing-page/no-location/no-location.component';
import { CurrentForecastComponent } from './components/landing-page/current-forecast/current-forecast.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CityPageComponent } from './pages/city-page/city-page.component';
import { SearchModalComponent } from './components/landing-page/search-modal/search-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NoLocationComponent,
    CurrentForecastComponent,
    CityPageComponent,
    SearchModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
