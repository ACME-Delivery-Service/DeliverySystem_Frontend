import { NgModule } from '@angular/core';
import { DeliveryMapComponent } from './dumb/delivery-map/delivery-map.component';
import { DriverCardComponent } from './dumb/driver-card/driver-card.component';
import { NavigationComponent } from './dumb/navigation/navigation.component';
import { WorkCalendarComponent } from './dumb/work-calendar/work-calendar.component';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AgmCoreModule } from '@agm/core';
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgSemanticModule } from 'ng-semantic';
import { ParcelsTableComponent } from './dumb/parcels-table/parcels-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAeQ3s5Pwv38ZTTo6YNbR3wrUSAYIIh1bQ'
    }),
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    NgSemanticModule,
    ReactiveFormsModule,
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
