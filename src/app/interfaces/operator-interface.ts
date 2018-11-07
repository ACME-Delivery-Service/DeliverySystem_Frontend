import { ContactsInterface } from './contacts-interface';
import { LocationInterface } from './location-interface';

export interface OperatorInterface {
  avatar: string;
  id: number;
  name: string;
  contacts: ContactsInterface;
  status: string;
  location: LocationInterface;
  location_update_time: string;
}
