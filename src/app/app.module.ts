import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceFormComponent } from './Device/device-form/device-form.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PurchaseFormComponent } from './Purchase/purchase-form/purchase-form.component';
@NgModule({
  declarations: [
    AppComponent,
    DeviceFormComponent,
    CustomerFormComponent,
    PurchaseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
