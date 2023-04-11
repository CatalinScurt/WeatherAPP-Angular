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
import { DetailedForecastComponent } from './pages/detailed-forecast/detailed-forecast.component';
import { DailySliderComponent } from './components/detailed-forecast/daily-slider/daily-slider.component';
import { TodayHourlyForecastComponent } from './components/detailed-forecast/today-hourly-forecast/today-hourly-forecast.component';
import { TodayDetailsComponent } from './components/landing-page/today-details/today-details.component';
import { DailyForecastComponent } from './components/landing-page/daily-forecast/daily-forecast.component';
import { CityNotFoundComponent } from './components/city-not-found/city-not-found.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig, getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage, getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NoLocationComponent,
    CurrentForecastComponent,
    CityPageComponent,
    SearchModalComponent,
    DetailedForecastComponent,
    DailySliderComponent,
    TodayHourlyForecastComponent,
    TodayDetailsComponent,
    DailyForecastComponent,
    CityNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage())
  ],
  providers: [
    ScreenTrackingService, UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    );
  }
}
