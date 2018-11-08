import { OperatorInterface } from './operator-interface';
import { AddressInterface } from './address-interface';

export class ParcelInterface {
  id: number;
  delivery_period: {
    start: string;
    end: string;
  };
  priority: number;
  address_to: AddressInterface;
  address_from: AddressInterface;
  is_assigned: boolean;
  status: string;
  delivery_operator: OperatorInterface;
}


