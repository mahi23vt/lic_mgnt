import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  _url = 'http://localhost:8080/device';
  newUrl ='http://localhost:8080/device/type';
  constructor(private http: HttpClient) { }
  register (deviceData: any) : Observable<any>
  {
    return this.http.post<any>(this._url,deviceData);
  }
  getDevices(): Observable<any[]>{
    return this.http.get<any[]>(this._url);
  }

  deleteDevice(deviceType: string): Observable<any>
  {
      
      return this.http.delete(`${this.newUrl}/${deviceType}`);
  }
  }

