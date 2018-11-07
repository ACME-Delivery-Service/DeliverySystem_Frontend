import { Component } from '@angular/core';
import { OperatorInterface } from '../../../interfaces/operator-interface';

@Component({
  selector: 'app-delivery-map',
  templateUrl: './delivery-map.component.html',
  styleUrls: ['./delivery-map.component.css']
})
export class DeliveryMapComponent {
  title = 'My first AGM project';
  lat = 55.752134;
  lng = 48.744498;
  zoom = 15;

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

  public getIndex(i: number): number {
    return i + 1;
  }
}
