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
import { AuthGuardService } from './guards/auth.guard';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { OrdersListService } from './services/orders-list.service';
import { DialerService } from './services/dialer.service';
import { DriverInfoService } from './services/driver-info.service';

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
    SharedModule
  ],
  providers: [
    BackendService,
    ApiService,
    AuthService,
    AuthGuardService,
    UserService,
    DialerService,
    OrdersListService,
    DriverInfoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
    LoaderService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
