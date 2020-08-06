import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { RolesModule } from './e-commerce/roles.module'

const routes = [
    {
        path: 'roles',
        loadChildren: () => import('./e-commerce/roles.module').then(m => m.RolesModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        RolesModule
    ]
})
export class AppsModule {
}
