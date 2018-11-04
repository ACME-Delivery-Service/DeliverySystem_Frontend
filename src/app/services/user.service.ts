import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { ApiService } from './api.service';
import { catchError, filter, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { UserInterface } from '../interfaces/user-interface';

@Injectable()
export class UserService {
  constructor(private backend: BackendService, private api: ApiService) {}

  public getUserInfo(): void {
    this.backend
      .getUserInfo(this.api.getUserInfo)
      .pipe(map((res: HttpResponse<UserInterface>) => res.body))
      .subscribe((a: UserInterface) => console.warn(a));
  }
}
