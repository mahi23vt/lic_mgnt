import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators,FormArray } from '@angular/forms';
import { PurchaseService } from '../purchase.service';
import { ServiceService } from '../../customer/service.service';
import { DataValidator } from '../../customer/customer-form/data.validator';
import { Router } from '@angular/router';

interface Customer{
  id:number,
  customerName: string,
}

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrl: './purchase-form.component.css'
})
export class PurchaseFormComponent {
  purchaseForm! : FormGroup;
  purchaseData : any;  
  customers : any[] =[];
  constructor(private fb : FormBuilder, private service : PurchaseService, private customerService : ServiceService, private router : Router){}

  ngOnInit()
  {
    this.purchaseForm = this.fb.group({
      purchaseOrderNumber : ['',Validators.required],
      invoiceNumber : ['', Validators.required],
      invoiceDate : ['', Validators.required],
      invoiceType: ['',Validators.required],
      licensesAlloted : ['',Validators.required,Validators.min(0), Validators.max(1000000)],
      licensesGenerated : ['', Validators.required,Validators.min(0)],
      customerName : ['', Validators.required]
    }, {validator : DataValidator} );
    this.getCustomers();
  }
  getCustomers()
  {
    this.customerService.getCustomers().subscribe(
      (data:any[]) => {
        this.customers = data;
      }
    );
  }


  onSubmit()
  {
    this.purchaseData = {
      customer_id: this.purchaseForm.get('customerName')?.value,  // customer_id from customerName
      invoice_no: this.purchaseForm.get('invoiceNumber')?.value?.trim(),  // invoice_no from invoiceNumber
      purchase_order_no: this.purchaseForm.get('purchaseOrderNumber')?.value?.trim(),  // purchase_order_no from purchaseOrderNumber
      invoice_date: this.purchaseForm.get('invoiceDate')?.value + 'T12:00:00',  // invoice_date (ensure time is added in proper format)
      invoice_type: this.purchaseForm.get('invoiceType')?.value?.trim(),  // invoice_type from invoiceType
      licenses_alloted: this.purchaseForm.get('licensesAlloted')?.value,  // licenses_alloted from licensesAlloted
      licenses_generated: this.purchaseForm.get('licensesGenerated')?.value  // licenses_generated from licensesGenerated
    };
    
    console.log(this.purchaseForm.value);
    this.service.register(this.purchaseData)
    .subscribe(
      Response =>{ console.log("Success", Response),
        console.log('Invoice added successfully');
        this.router.navigate(['/purchaseData']);
      },
      error => console.log('Error', error)
    )
  }
  
}
