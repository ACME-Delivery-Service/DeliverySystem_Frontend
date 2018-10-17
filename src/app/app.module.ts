import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ParselsListComponent } from './components/dumb/parsels-list/parsels-list.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DeliveryMapComponent } from './delivery-map/delivery-map.component';
import { DeliveryOperatorCardComponent } from './delivery-operator-card/delivery-operator-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavigationComponent,
    ParselsListComponent,
    DeliveryMapComponent,
    LoginPageComponent,
    DeliveryOperatorCardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    ComponentsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAeQ3s5Pwv38ZTTo6YNbR3wrUSAYIIh1bQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {}
