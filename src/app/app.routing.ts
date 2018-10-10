import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ParselsListComponent } from './components/dumb/parsels-list/parsels-list.component';
import { DeliveryMapComponent } from './delivery-map/delivery-map.component';

const routes: Routes = [
  { path: 'index', component: ParselsListComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'map', component: DeliveryMapComponent }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
