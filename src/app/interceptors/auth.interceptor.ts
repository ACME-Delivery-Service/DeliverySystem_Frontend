import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = req.headers;
    if (this.authService.isAuthenticated()) {
      headers = headers.append('Authorization', 'token ' + this.authService.getToken());
      // console.warn('added header!');
      // console.warn('token ' + this.authService.getToken());
    }
    console.warn(headers);
    return next.handle(req);
  }
}
