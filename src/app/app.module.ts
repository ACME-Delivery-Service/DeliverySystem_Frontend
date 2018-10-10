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

@NgModule({
  declarations: [AppComponent, NavbarComponent, NavigationComponent, ParselsListComponent, DeliveryMapComponent, LoginPageComponent],
  imports: [
    BrowserAnimationsModule,
    NgbModule.forRoot(),
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
