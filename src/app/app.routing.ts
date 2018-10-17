import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ParselsListComponent } from './components/dumb/parsels-list/parsels-list.component';
import { DeliveryMapComponent } from './delivery-map/delivery-map.component';
import { DriverCardComponent } from './driver-card/driver-card.component';
import { WorkCalendarComponent } from './work-calendar/work-calendar.component';

const routes: Routes = [
  { path: 'driver', component: DriverCardComponent },
  { path: 'index', component: ParselsListComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'map', component: DeliveryMapComponent },
  { path: 'calendar', component: WorkCalendarComponent }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
