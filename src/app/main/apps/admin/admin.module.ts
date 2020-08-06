import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddEditAdminComponent } from './add-edit-admin/add-edit-admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { AdminListService } from './admin-list.service';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [AddEditAdminComponent, ListAdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ],
  providers:[AdminListService]
})
export class AdminModule { }
