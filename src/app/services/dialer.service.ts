import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Dialer } from '../interfaces/dialer';
import { OperatorInterface } from '../interfaces/operator-interface';

@Injectable({
  providedIn: 'root'
})
export class DialerService {
  private dialerSubject = new Subject<Dialer>();
  dialer = this.dialerSubject.asObservable();

  constructor() {}

  call(operatorInfo: OperatorInterface) {
    this.dialerSubject.next(<Dialer>{ userInfo: operatorInfo });
  }

  stopCall() {
    this.dialerSubject.next(<Dialer>{ userInfo: null });
  }
}
