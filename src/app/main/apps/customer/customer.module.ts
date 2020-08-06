import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';
import { MaterialModule } from '../../../material/material.module';
import { CustomerListService } from './customer-list.service';


@NgModule({
  declarations: [ListCustomerComponent, AddEditCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule
  ],
  providers:[
    CustomerListService
  ]
})
export class CustomerModule { }
