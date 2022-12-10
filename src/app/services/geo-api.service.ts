import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GeoApiService {

  getClientInfo() {
    return axios.get('https://geo.ipify.org/api/v2/country,city?apiKey=at_84JL1NuHF9CpQSxcG34d2FWlRgyGr').then(res => {
      return res;
    });
  }

  getClientInfoByIp(ipAddress: any) {
    return axios.get('https://geo.ipify.org/api/v2/country,city?apiKey=at_84JL1NuHF9CpQSxcG34d2FWlRgyGr&ipAddress=' + ipAddress).then(res => {
      return res;
    });
  }
}
