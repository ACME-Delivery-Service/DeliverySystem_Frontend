import { Component, OnInit } from '@angular/core';
import { DialerService } from '../../../services/dialer.service';
import { Subscription } from 'rxjs';
import { Dialer } from '../../../interfaces/dialer';
import { OperatorInterface } from '../../../interfaces/operator-interface';

@Component({
  selector: 'app-dialer',
  templateUrl: './dialer.component.html',
  styleUrls: ['./dialer.component.css']
})
export class DialerComponent implements OnInit {
  public operatorInfo: OperatorInterface;
  private subscription: Subscription;

  constructor(private dialerService: DialerService) {}

  ngOnInit() {
    this.operatorInfo = null;
    this.subscription = this.dialerService.dialer.subscribe((state: Dialer) => {
      this.operatorInfo = state.userInfo;
    });
  }

  public stopCall() {
    this.dialerService.stopCall();
  }
}
