import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators, FormArray } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css',
})
export class CustomerFormComponent {
  customerForm!: FormGroup;
  customerData: any;
  
  constructor(
    private fb: FormBuilder,
    private customerService: ServiceService,
    private router: Router
  ) {}
  ngOnInit() {
    this.customerForm = this.fb.group({
      customerName: ['', Validators.required],
    });
  }
  onSubmit() {
    console.log(this.customerForm.value);
    this.customerData ={
      customerName : this.customerForm.get('customerName')?.value?.trim()
    };
    this.customerService.register(this.customerForm.value)
        .subscribe(
          Response => {console.log("Success", Response),
            console.log('Customer Added Successfully', Response);
            this.router.navigate(['/customerData']);
          },
          error => {console.log('Error', error);
            alert('There was an error adding the customer');
          }
        )
    
  }
}
