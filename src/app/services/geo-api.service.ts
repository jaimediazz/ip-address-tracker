import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GeoApiService {

  prueba() {
    console.log("prueba");
/*     axios.get('https://geo.ipify.org/api/v2/country,city?apiKey=at_84JL1NuHF9CpQSxcG34d2FWlRgyGr').then(res => {
      console.log("respuesta con IP pública del usuario: ", res);
    }); */
  }
}
