import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';
import { CustomerListService } from './customer-list.service';

const routes: Routes = [
  {
    path: '',
    component: ListCustomerComponent,
    resolve: {
      data: CustomerListService
    }
  },
  {
    path: 'add',
    component: AddEditCustomerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
