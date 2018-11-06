import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserInterface } from '../interfaces/user-interface';

@Injectable()
export class BackendService {
  private headers = {};
  constructor(private http: HttpClient) {}

  public login(address: string, email: string, password: string): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<string>>(address, { email, password });
  }

  public getUserInfo(address: string): Observable<HttpResponse<UserInterface>> {
    return this.http.get<HttpResponse<UserInterface>>(address, {});
  }
}
