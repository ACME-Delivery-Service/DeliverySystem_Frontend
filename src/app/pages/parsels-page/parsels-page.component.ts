import { Component, OnInit } from '@angular/core';
import { ParcelInterface } from '../../interfaces/parcel-interface';
import { OperatorInterface } from '../../interfaces/operator-interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-parcels-page',
  templateUrl: './parcels-page.component.html',
  styleUrls: ['./parcels-page.component.css']
})
export class ParcelsPageComponent implements OnInit {
  public parcels: ParcelInterface[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    const operator1: OperatorInterface = {
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
    };

    const operator2: OperatorInterface = {
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
    };

    const operator3: OperatorInterface = {
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
    };

    const parcel1: ParcelInterface = {
      id: 16209,
      arrivalDate: '11.10.2018 15:30',
      status: 'OK',
      operator: operator1
    };

    const parcel2: ParcelInterface = {
      id: 16876,
      arrivalDate: '11.10.2018 18:45',
      status: 'DELAY',
      operator: operator3
    };

    const parcel3: ParcelInterface = {
      id: 16098,
      arrivalDate: '12.10.2018 09:15',
      status: 'OK',
      operator: operator2
    };

    const parcel4: ParcelInterface = {
      id: 16020,
      arrivalDate: '12.10.2018 19:35',
      status: 'DELAY',
      operator: operator1
    };

    const parcel5: ParcelInterface = {
      id: 16735,
      arrivalDate: '13.10.2018 18:10',
      status: 'OK',
      operator: operator2
    };

    const parcel6: ParcelInterface = {
      id: 17592,
      arrivalDate: '13.10.2018 17:50',
      status: 'OK',
      operator: operator2
    };

    const parcel7: ParcelInterface = {
      id: 16027,
      arrivalDate: '13.10.2018 19:30',
      status: 'DELAY',
      operator: operator3
    };

    const parcel8: ParcelInterface = {
      id: 16022,
      arrivalDate: '13.10.2018 19:35',
      status: 'DELAY',
      operator: operator1
    };

    this.parcels = [parcel1, parcel2, parcel3, parcel4, parcel5, parcel6, parcel7, parcel8];
  }
}
