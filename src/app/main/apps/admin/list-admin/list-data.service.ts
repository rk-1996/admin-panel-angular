import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class AdminService {
    public total = 0;
    constructor(private http: HttpClient) { }

    getAdminList(params) {
        const newParams = {
            page: params.pageIndex + 1
        }
        return this.http.post(environment.apiUrl + 'get-admins', {}, { params: newParams }).pipe(
            map((res) => {
                this.total = res['data']['total'];
                return res["data"]['data'];
            }));
    }
}