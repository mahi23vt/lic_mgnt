import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PurchaseService } from '../purchase.service';
import { Router } from '@angular/router';

interface Purchase{
  id: number,
  invoiceNo: string,
  invoiceDate: string,
  purchaseNo: string,
  customerName: string,
  licensesAlloted: number,
  licensesGenerated: number,
  createdAt: string,
  createdBy: string,
  lastModifiedAt: string,
  lastModifiedBy: string,
}
@Component({
  selector: 'app-purchase-data',
  templateUrl: './purchase-data.component.html',
  styleUrl: './purchase-data.component.css'
})
export class PurchaseDataComponent {
  purchases: Purchase[] = [];
  constructor (private http: HttpClient, private service: PurchaseService, private router : Router){}
  ngOnInit(){
    this.fetchData();
  }

  fetchData()
  {
    this.service.getPurchases().subscribe(
      (data: any[]) => {
        this.purchases = data;
      }
    )
  }
  navigateToAddPurchase(){
    this.router.navigate(['/purchaseForm'])
  }
  onDelete(selectedPurchase : any) : void{}
  onEdit(){}
}
