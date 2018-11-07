import { ContactsInterface } from './contacts-interface';

export interface OperatorInterface {
  photo: string;
  id: number;
  name: string;
  contacts: ContactsInterface;
  status: string;
}
