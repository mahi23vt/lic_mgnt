import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DeviceService } from '../device.service';
import { Router } from '@angular/router';
import { DeviceFormComponent } from '../device-form/device-form.component';
interface Device{
  id: number,
  deviceType: string;
  createdAt: string;
  createdBy: string;
  lastModifiedAt: string;
  lastModifiedBy: string;
}
@Component({
  selector: 'app-device-data',
  templateUrl: './device-data.component.html',
  styleUrl: './device-data.component.css'
})
export class DeviceDataComponent {
  editDeviceData : any;
  onDelete(selectedDevice : any): void {
    this.service.deleteDevice(selectedDevice.deviceType).subscribe(
      response => {
        // Remove the deleted device from the local list
        // this.devices = this.devices.filter(device => device.deviceType !== id);
        console.log('Device deleted successfully:', response);
      },
      error => {
        console.error('Error deleting device:', error);
      }
    );
  }
onEdit( thisDevice: Device) {
  this.editDeviceData = {
    deviceType : thisDevice.deviceType,
  }
  this.router.navigate(['/deviceform']);
throw new Error('Method not implemented.');
}
  devices: Device[] = [];
  constructor(private http: HttpClient, private service : DeviceService, private router: Router){}
  ngOnInit()
  {
    this.fetchData();
  }
  fetchData()
  {
   this.service.getDevices().subscribe(
    (data: any[]) => {
      this.devices = data;
    }
   )
  }
  navigateToAddDevice() {
    this.router.navigate(['/deviceform']);
  }
}
