import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

export interface User{
  id:number,
  username: string,
  role: string,
  active: boolean
  email: string,
  createdBy: string,
  lastModifiedBy: string,
  createdAt: string,
  
  lastModifiedAt: string,
  
  
  
}

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {
  users: User[] =[];
  constructor(private http: HttpClient, private service : UserService, private router : Router)
  {
 }
 ngOnInit(){
    this.fetchData();
  }

  fetchData()
  {
    this.service.getUsers().subscribe(
      (data:any[]) => {
        this.users = data;
        console.log(this.users);
      }
    )
    // 
  }
}
