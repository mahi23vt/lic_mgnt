import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {
  _url = 'http://localhost:8080/license'
  constructor(private http: HttpClient) { }

  register(licenseData : any)
  {
    return this.http.post<any>(this._url, licenseData);
  }

  getLicenses() : Observable < any[]>{
    return this.http.get<any[]>(this._url);
  }
}
