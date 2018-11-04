import { ContactInterface } from './contact-interface';

export interface UserInterface {
  id: number;
  location: string;
  email: string;
  contact: ContactInterface;
}
