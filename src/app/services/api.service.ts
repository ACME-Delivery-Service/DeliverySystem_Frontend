import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  private baseUrl = 'https://backend.acme-company.site';

  public get login() {
    return `${this.baseUrl}/account/login`;
  }
}
