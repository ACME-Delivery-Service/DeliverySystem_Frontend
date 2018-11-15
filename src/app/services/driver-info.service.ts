import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { OperatorInterface } from '../interfaces/operator-interface';

@Injectable()
export class DriverInfoService {
  constructor(private backend: BackendService, private api: ApiService) {}

  public getDriverInfo(id: number): Observable<OperatorInterface> {
    return this.backend.getDriverInfo(ApiService.getDriverInfo(id));
  }
}
