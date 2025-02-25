import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from '../device.service';

interface Device {
  deviceId: number;
  deviceType: string;
  createdAt: string;
  createdBy: string;
  lastModifiedAt: string;
  lastModifiedBy: string;
}

@Component({
  selector: 'app-device-data',
  templateUrl: './device-data.component.html',
  styleUrls: ['./device-data.component.css']
})
export class DeviceDataComponent implements OnInit {
  devices: Device[] = [];

  constructor(private service: DeviceService, private router: Router) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.service.getDevices().subscribe(
      (data: Device[]) => {
        this.devices = data;
      },
      (error) => {
        console.error('Error fetching devices:', error);
      }
    );
  }

  onEdit(selectedDevice: Device) {
    console.log("Editing Device:", selectedDevice);  // Debugging log

    this.router.navigate(['/deviceform'], {
      queryParams: {
        deviceId: selectedDevice.deviceId,
        deviceType: selectedDevice.deviceType,
        mode: 'edit' // To indicate edit mode
      }
    });
  }

  onDelete(selectedDevice: Device) {
    if (confirm(`Are you sure you want to delete ${selectedDevice.deviceType}?`)) {
      this.service.deleteDevice(selectedDevice.deviceId).subscribe(
        () => {
          alert('Device deleted successfully.');
          this.fetchData(); // Refresh list after deletion
        },
        (error) => {
          console.error('Error deleting device:', error);
          alert('Error deleting device.');
        }
      );
    }
  }

  navigateToAddDevice() {
    this.router.navigate(['/deviceform'], {
      queryParams: { mode: 'add' } // Indicate add mode
    });
  }
}
