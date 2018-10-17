import { Component, Input } from '@angular/core';
import { ParcelModel } from '../../../models/parcel.model';

@Component({
  selector: 'app-parcels-table',
  templateUrl: './parcels-table.component.html',
  styleUrls: ['./parcels-table.component.css']
})
export class ParcelsTableComponent {
  @Input()
  parcels: ParcelModel[];
}
