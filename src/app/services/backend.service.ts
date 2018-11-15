import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserInterface } from '../interfaces/user-interface';
import { OrdersListInterface } from '../interfaces/orders-list-interface';
import { OperatorInterface } from '../interfaces/operator-interface';

@Injectable()
export class BackendService {
  private headers = {};
  constructor(private http: HttpClient) {}

  public login(address: string, email: string, password: string): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<string>>(address, { email, password });
  }

  public getUserInfo(address: string): Observable<UserInterface> {
    return this.http.get<UserInterface>(address, {});
  }

  public getOrdersList(address: string): Observable<OrdersListInterface> {
    return this.http.get<OrdersListInterface>(address, {});
  }

  public getDriverInfo(address: string): Observable<OperatorInterface> {
    return this.http.get<OperatorInterface>(address, {});
  }
}
