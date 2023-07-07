import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss'],
})
export class GeolocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  async getCurrentLocation() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current coordinates:', coordinates);
  }
}
