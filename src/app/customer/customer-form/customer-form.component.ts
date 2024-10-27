import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators, FormArray } from '@angular/forms';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css',
})
export class CustomerFormComponent {
  customerForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private customerService: ServiceService
  ) {}
  ngOnInit() {
    this.customerForm = this.fb.group({
      customerName: ['', Validators.required],
    });
  }
  onSubmit() {
    console.log(this.customerForm.value);
    this.customerService.register(this.customerForm.value)
        .subscribe(
          Response => console.log("Success", Response),
          error => console.log('Error', error)
        )
    
  }
}
