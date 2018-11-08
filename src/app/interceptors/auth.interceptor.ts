import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isAuthenticated()) {
      const authReq = req.clone({
        ...req.headers,
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `token ${this.authService.getToken()}`
        })
      });

      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
