import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LoaderService } from '../../services/loader.service';
import { LoaderState } from '../../interfaces/loader';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';

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

  loading: boolean;
  private subscription: Subscription;

  constructor(
    private authService: AuthService,
    private loaderService: LoaderService,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.checkIfAuthenticated();
    this.loading = false;
    this.subscription = this.loaderService.loaderState.subscribe((state: LoaderState) => {
      this.loading = state.show;
    });
  }
  public submitForm(): void {
    if (this.loginForm.valid) {
      const cridentials = this.loginForm.value;
      this.authService.authenticate(cridentials['login'], cridentials['password']).subscribe(
        () => this.router.navigate(['index']),
        (err: HttpErrorResponse) => {
          this.snackBar.open(err.error.msg, null, { duration: 3000 });
        }
      );
      this.checkIfAuthenticated();
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.submitForm();
    }
  }

  private checkIfAuthenticated(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['index']);
    }
  }
}
