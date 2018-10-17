import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-delivery-map',
  templateUrl: './delivery-map.component.html',
  styleUrls: ['./delivery-map.component.css']
})
export class DeliveryMapComponent implements OnInit {
  constructor() {}

  // public link = "https://maps.googleapis.com/maps/api/js";

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  // @ViewChild('gmap') gmapElement: ElementRef;
  // constructor() { }

  // ngAfterViewInit() {
  //   var s = this.document.createElement("script");
  //   s.type = "text/javascript";
  //   s.src = "https://maps.googleapis.com/maps/api/js";
  //   this.elementRef.nativeElement.appendChild(s);
  // }

  ngOnInit() {
    // this.showMap();
    const mapProp = {
      center: new google.maps.LatLng(55.750152, 48.754249),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  // showMap() {
  //   console.log(this.gmapElement.nativeElement);
  //   const location = { lat: 55.750152, lng: 48.754249 };
  //   const options = {
  //     center: location,
  //     zoom: 8
  //   }
  //
  //   const map = new google.maps.Map(this.gmapElement.nativeElement, options);
  //   this.addMarket(map, location);
  // }
  //
  // addMarket(pos, map) {
  //   return new google.maps.Marker({
  //     position: pos,
  //     map: map,
  //   });
  // }
}


