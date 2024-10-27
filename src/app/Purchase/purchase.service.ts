import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  _url= 'http://localhost:8080/purchase'
  constructor(private http: HttpClient) { }

  register(purchaseData : any)
  {
    return this.http.post<any>(this._url, purchaseData)
  }
}
