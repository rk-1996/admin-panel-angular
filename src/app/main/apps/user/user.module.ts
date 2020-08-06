import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

import { FuseSharedModule } from '@fuse/shared.module';

import { UserComponent } from './userForm/user.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { EcommerceProductsService } from './user-listing/products.service';


const routes = [
    {
        path: 'user/listing',
        component: UserListingComponent,
        resolve: {
            data: EcommerceProductsService
        }
    },
    {
        path: 'user/add-user',
        component: UserComponent
    }
];

@NgModule({
    declarations: [
        UserComponent,
        UserListingComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,

        FuseSharedModule,
    ],
    providers: [
        EcommerceProductsService
    ],
    exports: [
        UserComponent
    ]
})

export class UserModule {
}
