import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPhotographer } from '../../../models/photographer.model';

@Injectable()
export class PhotographerListService implements Resolve<any>
{
    photographers: any[];
    onPhotographerChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    ) {
        // Set the defaults
        this.onPhotographerChanged = new BehaviorSubject({});
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
                this.getPhotographer()
            ]).then(() => {
                resolve();
            },
                reject
            );
        });
    }

    /**
     * Get Photographer List
     *
     * @returns {Promise<any>}
     */
    getPhotographer(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/photographers')
                .subscribe((photographerList: IPhotographer[]) => {
                    photographerList.map((photographer: IPhotographer) => {
                        photographer.fullName = photographer.firstName + ' ' + photographer.lastName;
                        return photographer;
                    });
                    this.photographers = photographerList;
                    this.onPhotographerChanged.next(this.photographers);
                    resolve(photographerList);
                }, reject);
        });
    }
}
