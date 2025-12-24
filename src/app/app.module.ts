import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DeviceDataComponent } from './Device/device-data/device-data.component';
import { RouterModule } from '@angular/router';
import { CustomerDataComponent } from './customer/customer-data/customer-data.component';
import { NavComponent } from './Nav/nav/nav.component';
import { PurchaseDataComponent } from './Purchase/purchase-data/purchase-data.component';
import { LicenseDataComponent } from './License/license-data/license-data.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { ExcelImportComponent } from './excel-import/excel-import.component';
import { UserDataComponent } from './Users/user-data/user-data.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ...routingComponents,
    DeviceDataComponent,
    CustomerDataComponent,
    NavComponent,
    PurchaseDataComponent,
    LicenseDataComponent,
    DashboardComponent,
    ExcelImportComponent,
    UserDataComponent,
    LoginComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,         // ✅ Add FormsModule
    ReactiveFormsModule, 
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
