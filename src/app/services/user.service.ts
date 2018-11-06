import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { ApiService } from './api.service';
import { catchError, filter, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { UserInterface } from '../interfaces/user-interface';

@Injectable()
export class UserService {
  constructor(private backend: BackendService, private api: ApiService) {}

  public getUserInfo(): Observable<UserInterface> {
    return this.backend.getUserInfo(this.api.getUserInfo);
  }
}
