import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceFormComponent } from './Device/device-form/device-form.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { LicenseFormComponent } from './License/license-form/license-form.component';
import { PurchaseFormComponent } from './Purchase/purchase-form/purchase-form.component';
import { DeviceDataComponent } from './Device/device-data/device-data.component';
import { CustomerDataComponent } from './customer/customer-data/customer-data.component';
import { NavComponent } from './Nav/nav/nav.component';
import { LicenseDataComponent } from './License/license-data/license-data.component';
import { PurchaseDataComponent } from './Purchase/purchase-data/purchase-data.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'customerData', component: CustomerDataComponent },
  { path: 'deviceform', component: DeviceFormComponent },
  { path: 'customerForm', component: CustomerFormComponent },
  { path: 'licenseForm', component: LicenseFormComponent },
  { path: 'purchaseForm', component: PurchaseFormComponent },
  { path: 'deviceData', component: DeviceDataComponent },
  {path: 'licenseData', component: LicenseDataComponent},
  {path:'purchaseData', component: PurchaseDataComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  DeviceFormComponent,
  CustomerFormComponent,
  LicenseFormComponent,
  PurchaseFormComponent,
  DeviceDataComponent,
  CustomerDataComponent
];
