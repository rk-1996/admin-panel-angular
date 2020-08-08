import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { ApiService } from '../../../common/services/api.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../common/services/notification.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _apiService: ApiService,
        private _router: Router,
        private _notificationService: NotificationService
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
        if (localStorage.getItem('access_token')) {
            this._router.navigateByUrl('/');
            return;
        }
    }

    async onSubmit() {
        try {
            const value = { ...this.loginForm.value };
            const loginResponse = await this._apiService.login(value);
            if (loginResponse?.status) {
                localStorage.setItem('access_token', loginResponse.access_token);
                localStorage.setItem('user', JSON.stringify(loginResponse.data));
                this._router.navigateByUrl('/');
            } else {
                this._notificationService.openSnakBar(loginResponse?.message, 'error');
            }
        } catch (error) {
            console.log('error', error);
        }
    }
}
