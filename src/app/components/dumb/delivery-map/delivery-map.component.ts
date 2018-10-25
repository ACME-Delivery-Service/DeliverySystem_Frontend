import { Component } from '@angular/core';

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
      photo: 'assets/img/ryan.jpg',
      name: 'John Vorbob',
      status: 'Occupied',
      id: 12
    },
    {
      photo: 'assets/img/elijah.png',
      name: 'Elijah Deliverer',
      status: 'Occupied',
      id: 123
    },
    {
      photo: 'assets/img/eva.jpg',
      name: 'Eva Qutie',
      status: 'Occupied',
      id: 1234
    }
  ];

  public getIndex(i: number): number {
    return i + 1;
  }
}
