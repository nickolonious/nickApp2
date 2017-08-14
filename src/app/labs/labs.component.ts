import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.scss']
})

export class LabsComponent implements OnInit {
  coords: any;
  location:any = {};
  latitude: string;
  longitude: string;
  accuracy: string;
  altitude: string;
  altitudeAccuracy: string;
  speed: string;
  constructor() { 
          
  }

  getLocation() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this), this.e, {
           enableHighAccuracy: true,
           timeout: 4000
      })
    }
  }

  e(error) {
     alert('ERROR:(' + error.code + '): '  + error.message);
  }

  setPosition(position){
    this.location = position.coords;
    console.log(this.location);
    this.latitude = "Latitude: " + this.location.latitude;
    this.longitude = "Longitude: " + this.location.longitude;
    this.accuracy = "Accuracy: " + this.location.accuracy;
    this.altitude = "Altitude: " + this.location.altitude;
    this.altitudeAccuracy = "Altitude Accuracy: " + this.location.altitudeAccuracy;
    this.speed = "Speed: " + this.location.speed;
    this.coords = this.location.latitude + ", " + this.location.longitude;
    
    document.getElementById('google_map')
      .setAttribute('src', 'https://maps.google.com/?q=' + this.coords + '&z=17&output=embed');
  }

  ngOnInit() {
  }

}
