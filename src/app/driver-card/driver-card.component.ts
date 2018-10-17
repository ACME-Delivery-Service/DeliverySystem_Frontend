import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.css']
})
export class DriverCardComponent implements OnInit {

  closeResult: string;
  modalReference: any;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalReference = this.modalService.open(content, { size: 'lg', });
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with:`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  close() {
    this.modalReference.close();
  }

  ngOnInit() {
  }

}
