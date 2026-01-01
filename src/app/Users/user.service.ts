import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './user-data/user-data.component';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // _url = 'http://localhost:8080/users'
  private _url = `${environment.apiBaseUrl}/users`;
  constructor( private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<{ data : User[]}>(this._url)
    .pipe(
      map(response => response.data)
    );
  }
}
