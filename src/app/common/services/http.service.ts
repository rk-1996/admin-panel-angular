import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { first } from 'rxjs/operators';
import { InterceptorSkipContentTypeHeader } from '../constant/constant';
@Injectable({
    providedIn: 'root',
})

export class HttpService {
    public BASE_URL: string = environment.apiUrl;
    constructor(
        private httpClient: HttpClient
    ) {
    }
    get(url, params = {}) {
        return this.httpClient.get(`${this.BASE_URL + url}`,
            {
                params: params,
                observe: 'body',
            }).pipe(first()).toPromise();
    }
    post(url, body = {}, params = {}) {
        return this.httpClient.post(`${this.BASE_URL + url}`, body,
            {
                params: params,
                observe: 'body',
            }).pipe(first()).toPromise();
    }

    postWithFormData(url, body = {}, params = {}): any {
        let formData: any = new FormData();
        for (let key in body) {
            formData.append(key, body[key]);
        }
        const headers = new HttpHeaders({
            [InterceptorSkipContentTypeHeader]: ''
        });
        return this.httpClient.post(`${this.BASE_URL + url}`, formData,
            {
                params: params,
                headers: headers,
                observe: 'body',
            }).pipe(first()).toPromise();
    }

    put(url, body = {}, params = {}) {
        return this.httpClient.put(`${this.BASE_URL + url}`, body,
            {
                params: params,
                observe: 'body',
            }).pipe(first()).toPromise();
    }
    delete(url, params = {}) {
        return this.httpClient.delete(`${this.BASE_URL + url}`,
            {
                params: params,
                observe: 'body',
            }).pipe(first()).toPromise();
    }
}
