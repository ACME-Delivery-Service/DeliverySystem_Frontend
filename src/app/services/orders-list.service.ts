import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { ApiService } from './api.service';
import { catchError, filter, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { OrdersListInterface } from '../interfaces/orders-list-interface';

@Injectable()
export class OrdersListService {
  constructor(private backend: BackendService, private api: ApiService) {}

  public getOrdersList(): Observable<OrdersListInterface> {
    return this.backend.getOrdersList(this.api.getOrdersList);
  }
}
