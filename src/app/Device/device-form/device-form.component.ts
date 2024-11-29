import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators, FormArray } from '@angular/forms';
import { DeviceService } from '../device.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrl: './device-form.component.css'
})
export class DeviceFormComponent {
  deviceForm! : FormGroup;
  deviceData : any;

  constructor( private fb: FormBuilder, private service : DeviceService, private router: Router){}

  ngOnInit()
  {
    this.deviceForm= this.fb.group({
      deviceName : ['', Validators.required]
    });
    
  }
  
  onSubmit()
  {
    // console.log(this.deviceForm.);
    console.log(this.deviceForm.valid);
    this.deviceData = {
      deviceType : this.deviceForm.get('deviceName')?.value
    };
    this.service.register(this.deviceData).subscribe(
      Response => {console.log("Success", Response),
      console.log('Device added successfully', Response);
      this.router.navigate(['/deviceData']);
      },
      error => {console.log('Error', error);
        alert('There was an error adding the device');
      }
    )
  }


}
