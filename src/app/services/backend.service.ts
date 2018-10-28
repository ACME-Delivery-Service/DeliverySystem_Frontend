import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BackendService {
  private headers = {};
  constructor(private http: HttpClient) {}

  public login(address: string): void {
    this.http
      .post(
        address,
        { email: 'j.doe@innopolis.ru', password: '12345678' },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
            allow: 'POST, OPTIONS, POST, GET, OPTIONS, PUT, DELETE'
          }
        }
      )
      .subscribe(response => console.warn(response));
  }
}
