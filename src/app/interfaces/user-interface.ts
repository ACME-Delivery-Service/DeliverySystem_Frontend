import { ContactsInterface } from './contacts-interface';

export interface UserInterface {
  id: number;
  location: string;
  email: string;
  avatar_url: string;
  contacts: ContactsInterface;
}
