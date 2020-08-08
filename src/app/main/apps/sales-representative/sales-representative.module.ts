import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRepresentativeRoutingModule } from './sales-representative-routing.module';
import { ListSalesRepresentativeComponent } from './list-sales-representative/list-sales-representative.component';
import { AddEditSalesRepresentativeComponent } from './add-edit-sales-representative/add-edit-sales-representative.component';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components';
import { SalesRepresentativeService } from './list-sales-representative/sales-representative-list.service';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [ListSalesRepresentativeComponent, AddEditSalesRepresentativeComponent],
  imports: [
    CommonModule,
    SalesRepresentativeRoutingModule,
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
    MatCheckboxModule
  ],
  providers: [SalesRepresentativeService]
})
export class SalesRepresentativeModule { }
