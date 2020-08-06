import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { fuseConfig } from 'app/fuse-config';
import { FakeDbService } from './main/apps/fake-db/fake-db.service';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { UserModule } from 'app/main/apps/user/user.module';
import { AppsModule } from 'app/main/apps/apps.module';

const appRoutes: Routes = [
    {
        path: 'user',
        loadChildren: () => import('./main/apps/user/user.module').then(m => m.UserModule)
    },
    // {
    //     path: 'e-commerce',
    //     loadChildren: () => import('./../app/main/apps/e-commerce/e-commerce.module').then(m => m.EcommerceModule)
    // },
    {
        path: 'apps',
        loadChildren: () => import('./main/apps/apps.module').then(m => m.AppsModule)
    },
    {
        path: '**',
        redirectTo: 'sample'
    },
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),
        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        UserModule,
        AppsModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
