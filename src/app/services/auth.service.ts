import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { ApiService } from './api.service';
import { catchError, filter } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private backend: BackendService, private api: ApiService) {}

  public authenticate(email: string, password: string): void {
    this.backend
      .login(this.api.login, email, password)
      .pipe(filter(token => !!token))
      .subscribe(token => localStorage.setItem('currentUser', JSON.stringify(token['token'])));
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('currentUser');

    return !!token;
  }
}
