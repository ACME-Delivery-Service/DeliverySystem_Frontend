import { NgModule } from '@angular/core';
import { DeliveryMapComponent } from './dumb/delivery-map/delivery-map.component';
import { DeliveryOperatorCardComponent } from './dumb/delivery-operator-card/delivery-operator-card.component';
import { DriverCardComponent } from './dumb/driver-card/driver-card.component';
import { NavigationComponent } from './dumb/navigation/navigation.component';
import { ParselsListComponent } from './dumb/parsels-list/parsels-list.component';
import { WorkCalendarComponent } from './dumb/work-calendar/work-calendar.component';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  declarations: [
    DeliveryMapComponent,
    DeliveryOperatorCardComponent,
    DriverCardComponent,
    NavigationComponent,
    ParselsListComponent,
    WorkCalendarComponent
  ]
})
export class SharedModule {}
