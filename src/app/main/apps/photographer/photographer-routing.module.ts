import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPhotographerComponent } from './list-photographer/list-photographer.component';
import { AddEditPhotographerComponent } from './add-edit-photographer/add-edit-photographer.component';

const routes: Routes = [
  {
    path: '',
    component: ListPhotographerComponent
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
