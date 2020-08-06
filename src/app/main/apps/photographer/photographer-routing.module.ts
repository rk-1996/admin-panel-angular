import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPhotographerComponent } from './list-photographer/list-photographer.component';
import { AddEditPhotographerComponent } from './add-edit-photographer/add-edit-photographer.component';
import { PhotographerListService } from './photographer-list.service';

const routes: Routes = [
  {
    path: '',
    component: ListPhotographerComponent,
    resolve: {
      data: PhotographerListService
    }
  },
  {
    path: 'add',
    component: AddEditPhotographerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotographerRoutingModule { }
