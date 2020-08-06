import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAdmin } from '../../../models/admin.model';

@Injectable()
export class AdminListService implements Resolve<any>
{
    admins: any[];
    onProductsChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    ) {
        // Set the defaults
        this.onProductsChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getAdmin()
            ]).then(() => {
                resolve();
            },
                reject
            );
        });
    }

    /**
     * Get Admin List
     *
     * @returns {Promise<any>}
     */
    getAdmin(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/admins')
                .subscribe((adminList: IAdmin[]) => {
                    adminList.map((admin:IAdmin) => {
                        admin.fullName = admin.firstName + ' ' + admin.lastName;
                        return admin;
                    });
                    this.admins = adminList;
                    this.onProductsChanged.next(this.admins);
                    resolve(adminList);
                }, reject);
        });
    }
}
