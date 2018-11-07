import { OperatorInterface } from './operator-interface';
import { AddressInterface } from './address-interface';

export class ParcelInterface {
  id: number;
  // deliveryPeriod: JSON;
  // priority: number;
  // adressTo: AddressInterface;
  // addressFrom: AddressInterface;
  // isAddigned: boolean;
  arrivalDate: string;
  status: string;
  operator: OperatorInterface;
}
