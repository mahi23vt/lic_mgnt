import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private _url = 'http://localhost:1923/licensemanagement/device';
  myResponse : any ;

  constructor(private http: HttpClient) {}

  register(deviceData: any): Observable<any> {
    console.log(deviceData);
    return this.http.post<any>(this._url, deviceData);
  }

  getDevices(): Observable<any[]> {
    return this.http.get<any[]>(this._url);
  }

  getDeviceById(id: number): Observable<any> {
    return this.http.get<any>(`${this._url}/${id}`);
  }

  // editDevice(device : {deviceId: number; deviceType: String}): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   this.myResponse = this.http.put<any>(`${this._url}/${device.deviceId}`, device, { headers });
  //   // return this.http.put<any>(`${this._url}/${device.deviceId}`, device, { headers });
  //   console.log("Response");
  //   console.log(this.myResponse);
  //   return this.myResponse;
  // }
  editDevice(device: { deviceId: number; deviceType: string }): Observable<any> {
    return this.http.put(`${this._url}/${device.deviceId}`, device, { responseType: 'text' }).pipe(
      tap(response => {
        console.log('Response:', response);
      }),
      catchError(error => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }
  
  
  

  deleteDevice(id: number): Observable<any> {
    return this.http.delete(`${this._url}/id/${id}`);
  }
}
