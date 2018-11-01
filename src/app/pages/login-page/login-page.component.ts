import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  public error: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.checkIfAuthenticated();
  }
  public submitForm(): void {
    if (this.loginForm.valid) {
      const cridentials = this.loginForm.value;
      this.authService
        .authenticate(cridentials['login'], cridentials['password'])
        .subscribe(() => this.router.navigate(['index']), (err: HttpErrorResponse) => (this.error = err.error.msg));
      this.checkIfAuthenticated();
    }
  }

  private checkIfAuthenticated(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['index']);
    }
  }
}
