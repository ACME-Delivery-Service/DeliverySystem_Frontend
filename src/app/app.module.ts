import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ParselsListComponent } from './components/dumb/parsels-list/parsels-list.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DeliveryMapComponent } from './delivery-map/delivery-map.component';
import { DeliveryOperatorCardComponent } from './delivery-operator-card/delivery-operator-card.component';
import { DriverCardComponent } from './driver-card/driver-card.component';
import { WorkCalendarComponent } from './work-calendar/work-calendar.component';


import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavigationComponent,
    ParselsListComponent,
    DeliveryMapComponent,
    LoginPageComponent,
    DeliveryOperatorCardComponent,
    DriverCardComponent,
    WorkCalendarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
