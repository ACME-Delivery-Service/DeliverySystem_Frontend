import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BackendService {
  private headers = {};
  constructor(private http: HttpClient) {}

  public login(address: string, email: string, password: string): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<string>>(address, { email, password });
  }
}
