import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root',
})

export class ApiService {
    constructor(private httpService: HttpService) { }

    login(data) {
        return this.httpService.postWithFormData('login', data);
    }

}