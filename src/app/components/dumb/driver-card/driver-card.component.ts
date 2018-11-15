import { Component, Input, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OperatorInterface } from '../../../interfaces/operator-interface';
import { DialerService } from '../../../services/dialer.service';
import { DriverInfoService } from '../../../services/driver-info.service';

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.css']
})
export class DriverCardComponent implements OnInit {
  @Input()
  driver: OperatorInterface;
  @Input()
  id: number;

  driverUpdated: OperatorInterface;
  closeResult: string;
  modalReference: any;
  lat = 55.752134;
  lng = 48.744498;

  constructor(private modalService: NgbModal, private dialerService: DialerService, private driverInfoService: DriverInfoService) {
    this.driverInfoService.getDriverInfo(this.id).subscribe((driver: OperatorInterface) => {
      this.driverUpdated = driver;
      console.warn(driver);
    });
  }

  call() {
    console.log('calling');
    this.dialerService.call(this.driver);
  }

  open(content) {
    this.modalReference = this.modalService.open(content, { size: 'lg' });
    this.modalReference.result.then(
      result => {
        this.closeResult = `Closed with:`;
      },
      reason => {
        this.closeResult = `Dismissed`;
      }
    );
  }

  close() {
    this.modalReference.close();
  }

  ngOnInit() {}
}
