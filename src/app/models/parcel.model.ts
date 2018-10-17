import { ParcelStatusModel } from './parcel-status.model';
import { OperatorModel } from './operator-model';

export class ParcelModel {
  id: number;
  arrivalDate: string;
  status: ParcelStatusModel;
  operator: OperatorModel;
}
