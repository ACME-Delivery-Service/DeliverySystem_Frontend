import { ContactsInterface } from './contacts-interface';
import { AddressInterface } from './address-interface';

export interface OperatorInterface {
  avatar: string;
  id: number;
  contacts: ContactsInterface;
  in_progress_orders_count: number;
  status: string;
  location: AddressInterface;
  location_update_time: string;
}
