import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotographerRoutingModule } from './photographer-routing.module';
import { AddEditPhotographerComponent } from './add-edit-photographer/add-edit-photographer.component';
import { ListPhotographerComponent } from './list-photographer/list-photographer.component';
import { MaterialModule } from '../../../material/material.module';
import { PhotographerListService } from './photographer-list.service';


@NgModule({
  declarations: [AddEditPhotographerComponent, ListPhotographerComponent],
  imports: [
    CommonModule,
    PhotographerRoutingModule,
    MaterialModule
  ],
  providers:[PhotographerListService]
})
export class PhotographerModule { }
