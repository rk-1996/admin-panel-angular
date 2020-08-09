import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatCardModule } from '@angular/material/card';


import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { CustomerRoutingModule } from './customer-routing.module';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';
import { MaterialModule } from '../../../material/material.module';
import { CustomerService } from './customer-list.service';


@NgModule({
  declarations: [ListCustomerComponent, AddEditCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule,
    MatProgressBarModule,
    NgxChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
    }),

    FuseSharedModule,
    FuseWidgetModule,
    RouterModule
  ],
  providers: [
    CustomerService
  ],
  exports: [
    ListCustomerComponent, AddEditCustomerComponent
  ]
})
export class CustomerModule { }
