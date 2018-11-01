import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ParcelsPageComponent } from './parsels-page/parsels-page.component';
import { SharedModule } from '../components/shared.module';
import { ApiService } from '../services/api.service';
import { BackendService } from '../services/backend.service';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPageComponent, ParcelsPageComponent],
  imports: [CommonModule, RouterModule, SharedModule, HttpClientModule, ReactiveFormsModule],
  providers: [BackendService, ApiService, AuthService]
})
export class PagesModule {}
