import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSalesRepresentativeComponent } from './list-sales-representative/list-sales-representative.component';
import { AddEditSalesRepresentativeComponent } from './add-edit-sales-representative/add-edit-sales-representative.component';

const routes: Routes = [
  {
    path: '',
    component: ListSalesRepresentativeComponent
  },
  {
    path: 'add',
    component: AddEditSalesRepresentativeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRepresentativeRoutingModule { }
