import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators,FormArray } from '@angular/forms';
import { PurchaseService } from '../purchase.service';
import { ServiceService } from '../../customer/service.service';


@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrl: './purchase-form.component.css'
})
export class PurchaseFormComponent {
  purchaseForm! : FormGroup;
  purchaseData : any;  
  customers : any[] =[];
  constructor(private fb : FormBuilder, private service : PurchaseService, private customerService : ServiceService){}

  ngOnInit()
  {
    this.purchaseForm = this.fb.group({
      purchaseOrderNumber : ['',Validators.required],
      invoiceNumber : ['', Validators.required],
      invoiceDate : ['', Validators.required],
      invoiceType: ['',Validators.required],
      licensesAlloted : ['',Validators.required],
      licensesGenerated : ['', Validators.required],
      customerName : ['', Validators.required]
    });
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
      invoice_no: this.purchaseForm.get('invoiceNumber')?.value,  // invoice_no from invoiceNumber
      purchase_order_no: this.purchaseForm.get('purchaseOrderNumber')?.value,  // purchase_order_no from purchaseOrderNumber
      invoice_date: this.purchaseForm.get('invoiceDate')?.value + 'T12:00:00',  // invoice_date (ensure time is added in proper format)
      invoice_type: this.purchaseForm.get('invoiceType')?.value,  // invoice_type from invoiceType
      licenses_alloted: this.purchaseForm.get('licensesAlloted')?.value,  // licenses_alloted from licensesAlloted
      licenses_generated: this.purchaseForm.get('licensesGenerated')?.value  // licenses_generated from licensesGenerated
    };
    
    console.log(this.purchaseForm.value);
    this.service.register(this.purchaseData)
    .subscribe(
      Response => console.log("Success", Response),
      error => console.log('Error', error)
    )
  }
  
}
