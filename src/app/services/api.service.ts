import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  private  static baseUrl = '/api';

  public static login() {
    return `${this.baseUrl}/account/login`;
  }

  public static getUserInfo() {
    return `${this.baseUrl}/account/info`;
  }

  public static getOrdersList() {
    return `${this.baseUrl}/order/list`;
  }

  // public static getDriverInfo(id: number) {
  //   return `${this.baseUrl}/driver/info?id=${id}`;
  // }

  public static getDriverInfo(id: number) {
    return `${this.baseUrl}/driver/${id}/info`;
  }
}
