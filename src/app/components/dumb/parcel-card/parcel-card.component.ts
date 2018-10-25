import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ParcelInterface } from '../../../interfaces/parcel-interface';

@Component({
  selector: 'app-parcel-card',
  templateUrl: './parcel-card.component.html',
  styleUrls: ['./parcel-card.component.css']
})
export class ParcelCardComponent {
  @Input()
  parcel: ParcelInterface;

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

}
