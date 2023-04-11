import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CityPageComponent } from './pages/city-page/city-page.component';
import { DetailedForecastComponent } from './pages/detailed-forecast/detailed-forecast.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'city/:city', component: CityPageComponent },
  { path: 'city/:city/details', component: DetailedForecastComponent },
  { path: '**', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
