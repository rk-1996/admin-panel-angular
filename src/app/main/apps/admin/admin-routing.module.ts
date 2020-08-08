import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { AddEditAdminComponent } from './add-edit-admin/add-edit-admin.component';

const routes: Routes = [
  {
    path: '',
    component: ListAdminComponent
  },
  {
    path: 'add',
    component: AddEditAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
