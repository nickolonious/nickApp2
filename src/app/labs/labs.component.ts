import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.scss']
})
export class LabsComponent implements OnInit {
  coords: any;
  location:any = {};
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
    this.coords = this.location.latitude + ", " + this.location.longitude;
    document.getElementById('google_map')
      .setAttribute('src', 'https://maps.google.com/?q=' + this.coords + '&z=17&output=embed');
  }

  ngOnInit() {
  }

 
}
