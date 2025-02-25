import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { LicenseService } from '../license.service';
import { DeviceService } from '../../Device/device.service';
import { PurchaseService } from '../../Purchase/purchase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-license-form',
  templateUrl: './license-form.component.html',
  styleUrl: './license-form.component.css'
})
export class LicenseFormComponent {
  licenseForm! : FormGroup;
  licenseData : any;
  devices : any[]=[];
  purchases : any[]=[];
  response : string='';
  constructor( private fb : FormBuilder, private service : LicenseService, private deviceService : DeviceService, private purchaseService: PurchaseService, private router : Router){}

  ngOnInit()
  {
    this.licenseForm = this.fb.group({
    serialNo : ['',Validators.required],
    licenseKey : ['', Validators.required],
    invoiceNo  : ['',Validators.required],
    deviceType : ['',Validators.required]
    });
    this.getDevices();
    this.getPurchases();
  }

  onSubmit()
  {
    this.response='';
    this.licenseData = {
      serialNo : this.licenseForm.get('serialNo')?.value?.trim(),
      licenseKey : this.licenseForm.get('licenseKey')?.value?.trim(),
      invoiceNo : this.licenseForm.get('invoiceNo')?.value,
      deviceName : this.licenseForm.get('deviceType')?.value,


      
    };
    // console.log(this.licenseForm.get('licenseKey')?.value);                
    //   console.log(this.licenseForm.get('serialNo')?.value);
    //   console.log(this.licenseForm.get('invoiceNo')?.value);
    //   console.log(this.licenseForm.get('deviceType')?.value);
    // console.log(this.licenseForm.value);
    this.service.register(this.licenseData)
    .subscribe(
      Response => {console.log("Success", Response),
          console.log('License Added Successfully', Response),
          this.router.navigate(['/licenseData'])
      },
      error => { console.log('Error', error) }
      

    )
  }
  onCancel()
  {
    this.router.navigate(['/licenseData']);
  }

  getDevices()
  {
    // console.log("Getting all devices");
    this.deviceService.getDevices().subscribe(
      (data: any[]) => {
        this.devices = data;
        // console.log("MK"+data.values);
      }
    )
  }

  getPurchases()
  {
    console.log("Get purchases entered");
    this.purchaseService.getPurchases().subscribe(
      (data : any[]) => {
        this.purchases = data;
        console.log(this.purchases.toString);
      }
    )
  }
}
