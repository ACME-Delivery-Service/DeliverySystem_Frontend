import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  private baseUrl = '/api';

  public get login() {
    return `${this.baseUrl}/account/login`;
  }
}
