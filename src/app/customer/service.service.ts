import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // _url = 'http://localhost:1923/licensemanagement/customer'
  private _url = `${environment.apiBaseUrl}/purchase`;
  constructor(private http: HttpClient) { }

  register(customerData: any)
  {
   return this.http.post<any>(this._url, customerData)
  }

  getCustomers(): Observable<any[]>{
    return this.http.get<any[]>(this._url);
  }
}
