import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent implements OnInit {
  deviceId: number = 0;
  deviceType: string = '';
  isEditMode: boolean = false;

  constructor(private route: ActivatedRoute, private service: DeviceService, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['mode'] === 'edit') {
        this.isEditMode = true;
        this.deviceId = +params['deviceId'];  // Convert to number
        this.deviceType = params['deviceType'];
      }
    });
  }

  onSubmit() {
    if (this.isEditMode) {
      // Call update API
      this.service.editDevice({ deviceId: this.deviceId, deviceType: this.deviceType }).subscribe(
        () => {
          // alert('Device updated successfully.');
          this.router.navigate(['/deviceData']);
        },
        (error) => {
          console.error('Error updating device:', error);
          alert('Error updating device.');
        }
      );
    } else {
      // Call add API
      this.service.register({ deviceType: this.deviceType }).subscribe(
        () => {
          alert('Device added successfully.');
          this.router.navigate(['/devicedata']);
        },
        (error) => {
          console.error('Error adding device:', error);
          alert('Error adding device.');
        }
      );
    }
  }

  onCancel() {
    this.router.navigate(['/devicedata']);
  }
}
