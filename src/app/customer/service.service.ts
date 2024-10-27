import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  _url = 'http://localhost:8080/customer'
  constructor(private http: HttpClient) { }

  register(customerData: any)
  {
   return this.http.post<any>(this._url, customerData)
  }
}
