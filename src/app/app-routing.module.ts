import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CityPageComponent } from './pages/city-page/city-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'city/:city', component: CityPageComponent },
  { path: '**', component: LandingPageComponent },
  // { path: ':city', component: pagina noua, randez current forecast in ea }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
