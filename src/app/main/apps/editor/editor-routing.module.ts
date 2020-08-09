import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEditorsComponent } from './list-editors/list-editors.component';

const routes: Routes = [
  {
    path: '',
    component: ListEditorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
