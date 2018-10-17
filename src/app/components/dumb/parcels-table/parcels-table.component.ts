import { Component, Input } from '@angular/core';
import { ParcelInterface } from '../../../interfaces/parcel-interface';

@Component({
  selector: 'app-parcels-table',
  templateUrl: './parcels-table.component.html',
  styleUrls: ['./parcels-table.component.css']
})
export class ParcelsTableComponent {
  @Input()
  parcels: ParcelInterface[];

  public getIndex(i: number): number {
    return i + 1;
  }
}
