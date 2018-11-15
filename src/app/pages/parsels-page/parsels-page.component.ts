import { Component, OnInit } from '@angular/core';
import { ParcelInterface } from '../../interfaces/parcel-interface';
import { OrdersListInterface } from '../../interfaces/orders-list-interface';
import { OrdersListService } from '../../services/orders-list.service';
import { OperatorInterface } from '../../interfaces/operator-interface';
import { AddressInterface } from '../../interfaces/address-interface';

@Component({
  selector: 'app-parcels-page',
  templateUrl: './parcels-page.component.html',
  styleUrls: ['./parcels-page.component.css']
})
export class ParcelsPageComponent implements OnInit {
  public parcels: ParcelInterface[];

  constructor(private ordersListService: OrdersListService) {
    this.ordersListService.getOrdersList().subscribe((orders: OrdersListInterface) => {
      this.parcels = orders.results;
    });
  }

  ngOnInit() {}
}
