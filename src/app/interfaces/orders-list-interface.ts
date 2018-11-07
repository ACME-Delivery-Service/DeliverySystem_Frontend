import {ParcelInterface} from './parcel-interface';

export interface OrdersListInterface {
  total_count: number;
  results: ParcelInterface[];
}
