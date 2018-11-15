import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user-interface';

@Injectable()
export class UserService {
  constructor(private backend: BackendService, private api: ApiService) {}

  public getUserInfo(): Observable<UserInterface> {
    return this.backend.getUserInfo(ApiService.getUserInfo());
  }
}
