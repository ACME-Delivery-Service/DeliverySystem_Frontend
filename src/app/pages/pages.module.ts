import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ParcelsPageComponent } from './parsels-page/parsels-page.component';
import { SharedModule } from '../components/shared.module';

@NgModule({
  declarations: [LoginPageComponent, ParcelsPageComponent],
  imports: [CommonModule, RouterModule, SharedModule]
})
export class PagesModule {}
