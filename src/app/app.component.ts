import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import { GeoApiService } from './services/geo-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  map: any;
  clientInfo: any;
  marker: any;
  customMarker = L.icon({
    iconUrl: '../assets/icon-location.svg',
    iconAnchor: [22, 94]
  })

  constructor(private geoApiService: GeoApiService) { }
  
  async ngOnInit(): Promise<void> {
    this.clientInfo = await this.geoApiService.getClientInfo();
    
    this.map = new L.Map('map', {
      center: [ this.clientInfo.data.location.lat, this.clientInfo.data.location.lng ],
      zoom: 12
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    
    tiles.addTo(this.map);
    
    this.createMarker(this.clientInfo.data.location.lat, this.clientInfo.data.location.lng);
  }

  async getInfoFromIp(ipAddress: any) {
    this.clientInfo = await this.geoApiService.getClientInfoByIp(ipAddress);
    this.createMarker(this.clientInfo.data.location.lat, this.clientInfo.data.location.lng);
  }

  createMarker(lat: number, lng: number) {
    if(this.marker != undefined) {
      this.map.removeLayer(this.marker);        // SI YA HAY UN PUNTO EN EL MAPA SE BORRA
      this.map.panTo(new L.LatLng(lat, lng));   // SE MUEVE EL MAPA AL NUEVO PUNTO
    }
    this.marker = L.marker([lat, lng], { icon: this.customMarker }).addTo(this.map);  // SE CREA EL PUNTO
  }
}
