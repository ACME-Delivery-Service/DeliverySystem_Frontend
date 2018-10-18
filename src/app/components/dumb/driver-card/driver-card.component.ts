import { Component, Input, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { OperatorInterface } from '../../../interfaces/operator-interface';

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.css']
})
export class DriverCardComponent implements OnInit {
  @Input()
  driver: OperatorInterface;

  closeResult: string;
  modalReference: any;
  lat = 55.752134;
  lng = 48.744498;

  constructor(private modalService: NgbModal) {}

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
