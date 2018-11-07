import { OperatorInterface } from './operator-interface';
import { AddressInterface } from './address-interface';

export class ParcelInterface {
  id: number;
  delivery_period: {
    start: string;
    end: string;
  };
  priority: number;
  adressTo: AddressInterface;
  addressFrom: AddressInterface;
  isAssigned: boolean;
  delivery_status: string;
  operator: OperatorInterface;
}

