import { Component, Input, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { OperatorInterface } from '../../../interfaces/operator-interface';
import { DialerService } from '../../../services/dialer.service';

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.css']
})
export class DriverCardComponent implements OnInit {
  @Input()
  driver: OperatorInterface;
  @Input()
    isFull: boolean;

  closeResult: string;
  modalReference: any;
  lat = 55.752134;
  lng = 48.744498;
  drivers = [
    {
      avatar: 'assets/img/mike.jpg',
      contacts: {
        address: null,
        phone_number: '+7912492904',
        additional_info: null,
        first_name: 'John',
        last_name: 'Vorbob',
        position: null,
        company: null
      },
      location: null,
      status: 'Occupied',
      location_update_time: null,
      id: 12
    },

    {
      avatar: 'assets/img/elijah.png',
      status: 'Occupied',
      contacts: {
        address: null,
        phone_number: '+7912492904',
        additional_info: null,
        first_name: 'Elijah',
        last_name: 'Deliverer',
        position: null,
        company: null
      },
      location: null,
      location_update_time: null,
      id: 123
    },

    {
      avatar: 'assets/img/eva.jpg',
      status: 'Occupied',
      contacts: {
        address: null,
        phone_number: '+7912492904',
        additional_info: null,
        first_name: 'Eva',
        last_name: 'Qutie',
        position: null,
        company: null
      },
      location: null,
      location_update_time: null,
      id: 1234
    }
  ];

  constructor(private modalService: NgbModal, private dialerService: DialerService) {}

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

  changeDriver(driver: OperatorInterface) {
    this.driver = driver;
  }
}
