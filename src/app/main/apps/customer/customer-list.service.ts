import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable()
export class CustomerService {
    public total = 0;
    constructor(private http: HttpClient) { }

    getList(params) {
        const newParams = {
            page: params.pageIndex + 1,
            limit: params.pageSize
        }
        return this.http.post(environment.apiUrl + 'get-customers', {}, { params: newParams }).pipe(
            map((res) => {
                this.total = res['data']['total'];
                return res["data"]['data'];
            }));
    }
}