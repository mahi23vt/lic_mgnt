import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {
  // _url = 'http://localhost:1923/licensemanagement/license'
  private _url = `${environment.apiBaseUrl}/license`;
  constructor(private http: HttpClient) { }

  register(licenseData : any)
  {
    console.log(licenseData);
    return this.http.post<any>(this._url, licenseData);
  }

  getLicenses() : Observable < any[]>{
    return this.http.get<any[]>(this._url);
  }
}
