import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { RolesModule } from './e-commerce/roles.module';

const routes = [
    {
        path: 'roles',
        loadChildren: () => import('./e-commerce/roles.module').then(m => m.RolesModule)
    },
    {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: 'photographer',
        loadChildren: () => import('./photographer/photographer.module').then(m => m.PhotographerModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        RolesModule
    ],
    declarations: []
})
export class AppsModule {
}
