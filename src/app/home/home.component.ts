import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { CapitalesService } from '../capitales.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private capitalesService: CapitalesService) { }
  ownLocation: any;
  markerPositions: any;
  ngOnInit(): void {
    this.markerPositions = this.capitalesService.getCities();
    this.ownLocation = this.getUserLocation();
    this.capitalesService.setCurrentComponent(0);
    console.log("currentcomponent: home");
    console.log(this.capitalesService.currentComponent);
    console.log("capitals should show on home",this.markerPositions);
  }
  getUserLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
          this.ownLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
          console.log('Location accessed',this.ownLocation);
      },
      (error) => {
          console.log('User did not allow location access');
      },
      { timeout: 10000 }
  );
  }
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 48,
    lng: 2
  };
  zoom = 4;
  selectedMarkerPosition: any = null;
  userMarkerIcon: any = {
    url: 'assets/User.png',
    scaledSize: { width: 30, height: 30 },
  };

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
 

  openInfoWindow(marker: MapMarker, markerPosition: any) {
    this.selectedMarkerPosition = markerPosition;
    if (this.infoWindow != undefined) this.infoWindow.open(marker);
  }
}
