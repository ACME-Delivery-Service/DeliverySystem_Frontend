import { Component, Input, OnInit } from '@angular/core';
import { ParcelInterface } from '../../../interfaces/parcel-interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parcels-table',
  templateUrl: './parcels-table.component.html',
  styleUrls: ['./parcels-table.component.css']
})
export class ParcelsTableComponent implements OnInit {
  @Input()
  parcels: ParcelInterface[];

  public formGroup: FormGroup;
  public availableStatuses: string[] = ['OK', 'DELAY'];
  public filteredParcels;

  constructor() {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      id: new FormControl(''),
      date: new FormControl(''),
      status: new FormControl(''),
      operator: new FormControl('')
    });
    this.filteredParcels = this.parcels;
    this.formGroup.valueChanges.subscribe(() => this.refilter());
  }

  public getIndex(i: number): number {
    return i + 1;
  }

  private refilter(): void {
    this.filteredParcels = this.parcels;
    const filteredId = this.formGroup.get('id').value;
    const filteredDate = this.formGroup.get('date').value;
    const filteredStatus = this.formGroup.get('status').value;
    const filteredOperator = this.formGroup.get('operator').value;

    if (!!filteredId) {
      this.filteredParcels = this.filteredParcels.filter(({ id }: ParcelInterface) =>
        id.toString().startsWith(filteredId)
      );
    }

    if (!!filteredDate) {
      this.filteredParcels = this.filteredParcels.filter(({ arrivalDate }: ParcelInterface) =>
        arrivalDate.startsWith(filteredDate)
      );
    }

    if (!!filteredOperator) {
      this.filteredParcels = this.filteredParcels.filter(({ operator }: ParcelInterface) =>
        operator.name.startsWith(filteredOperator)
      );
    }

    if (!!filteredStatus) {
      this.filteredParcels = this.filteredParcels.filter(({ status }: ParcelInterface) =>
        status.toString().startsWith(filteredStatus)
      );
    }
  }
}
