import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { CapitalesService } from '../capitales.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private capitalesService: CapitalesService) {
    
   }

  ngOnInit(): void { 
    this.markerPositions = this.capitalesService.getCities(); 
    this.capitalesService.setCurrentComponent(0);
    console.log("currentcomponent: home" );
    console.log(this.capitalesService.currentComponent);
  }
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 48,
    lng: 2
  };
  zoom = 4;
  selectedMarkerPosition: any = null;

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  markerPositions :any;
  // markerPositions = [
  //   { lat: 40.416775, lng: -3.703790, name: 'Madrid', population: 3223334 },   // Madrid, Spain
  //   { lat: 48.856613, lng: 2.352222, name: 'Paris', population: 2140526 },     // Paris, France
  //   { lat: 38.736946, lng: -9.142685, name: 'Lisbon', population: 505526 },    // Lisbon, Portugal
  //   { lat: 52.520008, lng: 13.404954, name: 'Berlin', population: 3748148 },   // Berlin, Germany
  //   { lat: 50.850346, lng: 4.351721, name: 'Brussels', population: 185103 },   // Brussels, Belgium
  //   { lat: 52.367573, lng: 4.904138, name: 'Amsterdam', population: 821752 }   // Amsterdam, Netherlands
  // ];

  openInfoWindow(marker: MapMarker, markerPosition: any) {
    this.selectedMarkerPosition = markerPosition;
    if (this.infoWindow != undefined) this.infoWindow.open(marker);

  }
}
