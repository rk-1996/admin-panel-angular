import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './common/services/auth-guard.service';
import { AuthGuard } from './common/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        canActivate:[AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'apps',
                loadChildren: () => import('./main/apps/apps.module').then(m => m.AppsModule)
            },
            {
                path: 'customer',
                loadChildren: () => import('./main/apps/customer/customer.module').then(m => m.CustomerModule)
            },
            {
                path: 'admin',
                // canLoad: [AuthGuardService],
                loadChildren: () => import('./main/apps/admin/admin.module').then(m => m.AdminModule)
            },
            {
                path: 'photographer',
                loadChildren: () => import('./main/apps/photographer/photographer.module').then(m => m.PhotographerModule)
            },
            {
                path: 'sales-representative',
                loadChildren: () => import('./main/apps/sales-representative/sales-representative.module').then(m => m.SalesRepresentativeModule)
            },
            {
                path: 'editor',
                loadChildren: () => import('./main/apps/editor/editor.module').then(m => m.EditorModule)
            },
        ]
    },
    {
        path: 'login',
        loadChildren: () => import('./main/apps/login/login.module').then(m => m.LoginModule)
    },
    {
        path: '**',
        redirectTo: 'sample'
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
