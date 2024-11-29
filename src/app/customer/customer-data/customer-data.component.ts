import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
interface Customer{
  id:number,
  customerName: string,
  createdAt: string,
  createdBy: string,
  lastModifiedAt: string,
  lastModifiedBy: string,
}
@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrl: './customer-data.component.css'
})
export class CustomerDataComponent {
  customers: Customer[] =[];
  constructor(private http: HttpClient, private service : ServiceService, private router : Router)
  {}
  ngOnInit(){
    this.fetchData();
  }

  fetchData()
  {
    this.service.getCustomers().subscribe(
      (data:any[]) => {
        this.customers = data;
      }
    )
  }
  navigateToAddCustomer(){
    this.router.navigate(['/customerForm'])
  }
  onDelete(selectedDevice : any): void {
    // this.service.deleteDevice(selectedDevice.deviceType).subscribe(
    //   response => {
    //     // Remove the deleted device from the local list
    //     // this.devices = this.devices.filter(device => device.deviceType !== id);
    //     console.log('Device deleted successfully:', response);
    //   },
    //   error => {
    //     console.error('Error deleting device:', error);
    //   }
    // );
  }
onEdit( ) {
//   this.editDeviceData = {
//     deviceType : thisDevice.deviceType,
//   }
//   this.router.navigate(['/deviceform']);
// throw new Error('Method not implemented.');
}

  
}
