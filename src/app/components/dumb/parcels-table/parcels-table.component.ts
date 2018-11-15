import { Component, Input, OnInit } from '@angular/core';
import { ParcelInterface } from '../../../interfaces/parcel-interface';
import { FormControl, FormGroup } from '@angular/forms';
import { OrdersListInterface } from '../../../interfaces/orders-list-interface';
import { OrdersListService } from '../../../services/orders-list.service';
import { OperatorInterface } from '../../../interfaces/operator-interface';
import { AddressInterface } from '../../../interfaces/address-interface';

@Component({
  selector: 'app-parcels-table',
  templateUrl: './parcels-table.component.html',
  styleUrls: ['./parcels-table.component.css']
})
export class ParcelsTableComponent implements OnInit {
  // @Input()
  // parcels: ParcelInterface[];

  public formGroup: FormGroup;
  public availableStatuses: string[] = ['created', 'approved', 'en_route', 'stored', 'delivered'];
  public filteredParcels;
  public ordersList: OrdersListInterface;
  public parcels;

  constructor(private ordersListService: OrdersListService) {
    this.ordersListService.getOrdersList().subscribe((orders: OrdersListInterface) => {
      this.ordersList = orders;
      console.warn(orders);
    });

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
      delivery_period: { start: '11.10.2018 15:30', end: '11.10.2018 15:30' },
      status: 'OK',
      delivery_operator: operator1,
      priority: 1,
      address_to: null,
      address_from: null,
      is_assigned: null
    };

    const parcel2: ParcelInterface = {
      id: 16876,
      delivery_period: { start: '11.10.2018 15:30', end: '11.10.2018 18:45' },
      status: 'DELAY',
      delivery_operator: operator3,
      priority: 1,
      address_to: null,
      address_from: null,
      is_assigned: null
    };

    const parcel3: ParcelInterface = {
      id: 16098,
      delivery_period: { start: '11.10.2018 15:30', end: '12.10.2018 09:15' },
      status: 'OK',
      delivery_operator: operator2,
      priority: 1,
      address_to: null,
      address_from: null,
      is_assigned: null
    };

    const parcel4: ParcelInterface = {
      id: 16020,
      delivery_period: { start: '11.10.2018 15:30', end: '12.10.2018 19:35' },
      status: 'DELAY',
      delivery_operator: operator1,
      priority: 1,
      address_to: null,
      address_from: null,
      is_assigned: null
    };

    const parcel5: ParcelInterface = {
      id: 16735,
      delivery_period: { start: '11.10.2018 15:30', end: '13.10.2018 18:10' },
      status: 'OK',
      delivery_operator: operator2,
      priority: 1,
      address_to: null,
      address_from: null,
      is_assigned: null
    };

    const parcel6: ParcelInterface = {
      id: 17592,
      delivery_period: { start: '11.10.2018 15:30', end: '13.10.2018 17:50' },
      status: 'OK',
      delivery_operator: operator2,
      priority: 1,
      address_to: null,
      address_from: null,
      is_assigned: null
    };

    const parcel7: ParcelInterface = {
      id: 16027,
      delivery_period: { start: '11.10.2018 15:30', end: '13.10.2018 19:30' },
      status: 'DELAY',
      delivery_operator: operator3,
      priority: 1,
      address_to: null,
      address_from: null,
      is_assigned: null
    };

    const parcel8: ParcelInterface = {
      id: 16022,
      delivery_period: { start: '11.10.2018 15:30', end: '13.10.2018 19:35' },
      status: 'DELAY',
      delivery_operator: operator1,
      priority: 1,
      address_to: null,
      address_from: null,
      is_assigned: null
    };

    this.parcels = [
      {
        id: 1,
        delivery_period: {
          start: '2018-11-14T20:37:21Z',
          end: '2018-11-15T20:37:21Z'
        },
        priority: 1,
        address_to: { address: 'Universitetskaya street 1', location: { latitude: 45, longitude: 45 } },
        address_from: { address: 'Universitetskaya street 1', location: { latitude: 45, longitude: 45 } },
        is_assigned: false,
        status: 'created',
        delivery_operator: {
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
        }
      }
    ];

    this.parcels = [parcel1, parcel2, parcel3, parcel4, parcel5, parcel6, parcel7, parcel8];
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      id: new FormControl(''),
      date: new FormControl(''),
      status: new FormControl(''),
      operator: new FormControl('')
    });
    this.filteredParcels = this.parcels;
    this.formGroup.valueChanges.subscribe(() => this.refilter());
  }

  public getIndex(i: number): number {
    return i + 1;
  }

  private refilter(): void {
    this.filteredParcels = this.parcels;
    const filteredId = this.formGroup.get('id').value;
    const filteredDate = this.formGroup.get('date').value;
    const filteredStatus = this.formGroup.get('status').value;
    const filteredOperator = this.formGroup.get('operator').value;

    if (!!filteredId) {
      this.filteredParcels = this.filteredParcels.filter(({ id }: ParcelInterface) =>
        id.toString().startsWith(filteredId)
      );
    }

    if (!!filteredDate) {
      this.filteredParcels = this.filteredParcels.filter(({ delivery_period }: ParcelInterface) =>
        delivery_period.end.startsWith(filteredDate)
      );
    }

    if (!!filteredOperator) {
      this.filteredParcels = this.filteredParcels.filter(({ delivery_operator }: ParcelInterface) =>
        delivery_operator.contacts.first_name.startsWith(filteredOperator)
      );
    }

    if (!!filteredStatus) {
      this.filteredParcels = this.filteredParcels.filter(({ status }: ParcelInterface) =>
        status.toString().startsWith(filteredStatus)
      );
    }
  }
}
