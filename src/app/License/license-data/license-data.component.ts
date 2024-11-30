import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LicenseService } from '../license.service';
import { Router } from '@angular/router';

interface License{
  id : number,
    serialNo : string,
    licenseKey : string,
    invoiceNo : string,
    customerName : string,
    deviceType : string,
    createdAt : string,
    createdBy : string,
    lastModifiedAt : string,
    lastModifiedBy : string,
    active : boolean,
}
@Component({
  selector: 'app-license-data',
  templateUrl: './license-data.component.html',
  styleUrl: './license-data.component.css'
})
export class LicenseDataComponent {
  licenses : License[] = [];
  constructor (private http: HttpClient, private service : LicenseService, private router : Router){}
  ngOnInit()
  {
    this.fetchData();
  }
  fetchData()
  {
    this.service.getLicenses().subscribe(
      (data: any[]) => {
        this.licenses = data;
      }
    )
  }
  navigateToAddLicense()
  {
    this.router.navigate(['/licenseForm'])
  }
  onDelete(selectedDevice : any): void {

  }
onEdit( ) {

}
}
