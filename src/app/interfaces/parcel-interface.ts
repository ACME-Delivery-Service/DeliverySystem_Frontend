import { OperatorInterface } from './operator-interface';

export class ParcelInterface {
  id: number;
  arrivalDate: string;
  status: string;
  operator: OperatorInterface;
}
