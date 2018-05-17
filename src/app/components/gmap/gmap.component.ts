import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {} from '@types/googlemaps';
import {Company} from "../../models/company";

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {
  @Input() company: Company
  @ViewChild('gmap') gmapElement: any;
  public map: google.maps.Map;
  public geocoder: google.maps.Geocoder;

  constructor() {
  }

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    this.setMarker();
  }

  setMarker() {
    this.geocoder = new google.maps.Geocoder();

    this.geocoder.geocode({address: this.getFormattedAddress()}, ((results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        this.map.setCenter(results[0].geometry.location);
        const marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map,
          title: 'Headquarter'
        });
      }
    }));
  }

  getFormattedAddress(): string {
    return `${this.company.headquarters.address}, ${this.company.headquarters.city}, ${this.company.headquarters.state}`;
  }

}
