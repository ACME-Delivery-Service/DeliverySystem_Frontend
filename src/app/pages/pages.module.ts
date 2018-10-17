import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, RouterModule]
})
export class PagesModule {}
