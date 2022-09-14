import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as L from 'leaflet';
import { GeoApiService } from './services/geo-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  map: any;

  constructor(private geoApiService: GeoApiService) { }
  
  ngOnInit(): void {
    this.geoApiService.prueba();
  }

  ngAfterViewInit(): void {
    console.log("2");
    this.map = new L.Map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    
    tiles.addTo(this.map);
    console.log("3");
  }
}
