import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './components/shared.module';
import { BackendService } from './services/backend.service';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';




@NgModule({
  declarations: [AppComponent],
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
    ReactiveFormsModule,
    PagesModule,
    SharedModule,
  ],
  providers: [BackendService, ApiService, AuthService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
