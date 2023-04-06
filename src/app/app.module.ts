import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NoLocationComponent } from './components/landing-page/no-location/no-location.component';
import { CurrentForecastComponent } from './components/landing-page/current-forecast/current-forecast.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CityPageComponent } from './pages/city-page/city-page.component';
import { SearchModalComponent } from './components/landing-page/search-modal/search-modal.component';
import { TestComponent } from './pages/test/test.component';
import { DetailedForecastComponent } from './pages/detailed-forecast/detailed-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NoLocationComponent,
    CurrentForecastComponent,
    CityPageComponent,
    SearchModalComponent,
    TestComponent,
    DetailedForecastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    );
  }
}
