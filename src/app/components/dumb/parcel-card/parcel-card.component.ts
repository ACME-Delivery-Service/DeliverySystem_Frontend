import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ParcelInterface } from '../../../interfaces/parcel-interface';
import { OperatorInterface } from '../../../interfaces/operator-interface';

@Component({
  selector: 'app-parcel-card',
  templateUrl: './parcel-card.component.html',
  styleUrls: ['./parcel-card.component.css']
})
export class ParcelCardComponent {
  @Input()
  parcel: ParcelInterface;

  delivery_operator: OperatorInterface = {
    avatar: 'assets/img/avatar.jpg',
    status: 'Occupied',
    contacts: {
      address: null,
      phone_number: '+7912492904',
      additional_info: null,
      first_name: 'Mikhail',
      last_name: 'Zadin',
      position: null,
      company: null
    },
    location: null,
    location_update_time: null,
    id: 123
  };
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
