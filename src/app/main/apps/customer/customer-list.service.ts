import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CustomerListService implements Resolve<any>
{
    customers: any[];
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
                this.getCustomer()
            ]).then(() => {
                resolve();
            },
                reject
            );
        });
    }

    /**
     * Get Customer List
     *
     * @returns {Promise<any>}
     */
    getCustomer(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/customers')
                .subscribe((response: any) => {
                    this.customers = response;
                    this.onProductsChanged.next(this.customers);
                    resolve(response);
                }, reject);
        });
    }
}
