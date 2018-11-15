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

    this.parcels = [{
      id: 1,
      delivery_period: {
        start: '2018-11-14T20:37:21Z',
        end: '2018-11-15T20:37:21Z',
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
      },
    }];
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
