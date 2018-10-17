import { NgModule } from '@angular/core';
import { DeliveryMapComponent } from './dumb/delivery-map/delivery-map.component';
import { DriverCardComponent } from './dumb/driver-card/driver-card.component';
import { NavigationComponent } from './dumb/navigation/navigation.component';
import { WorkCalendarComponent } from './dumb/work-calendar/work-calendar.component';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AgmCoreModule } from '@agm/core';
import { ParcelsTableComponent } from './dumb/parcels-table/parcels-table.component';
@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAeQ3s5Pwv38ZTTo6YNbR3wrUSAYIIh1bQ'
    })
  ],
  declarations: [
    DeliveryMapComponent,
    DriverCardComponent,
    NavigationComponent,
    WorkCalendarComponent,
    ParcelsTableComponent
  ],
  exports: [
    DeliveryMapComponent,
    DriverCardComponent,
    NavigationComponent,
    WorkCalendarComponent,
    ParcelsTableComponent
  ]
})
export class SharedModule {}
