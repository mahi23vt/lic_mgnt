import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrl: './device-form.component.css'
})
export class DeviceFormComponent {
  deviceForm! : FormGroup;

  constructor( private fb: FormBuilder){}

  ngOnInit()
  {
    this.deviceForm= this.fb.group({
      deviceName : ['', Validators.required]
    });
    
  }
  
  onSubmit(value : any)
  {
    // console.log(this.deviceForm.);
  }


}
