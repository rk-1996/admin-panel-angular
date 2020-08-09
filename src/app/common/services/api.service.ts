import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root',
})

export class ApiService {
    constructor(private httpService: HttpService) { }

    login(loginData) {
        return this.httpService.postWithFormData('login', loginData);
    }
    getAdminList(params = {}): any {
        return this.httpService.post('get-admins', {}, params);
    }
    addAdmin(adminData) {
        return this.httpService.postWithFormData('add-admin', adminData);
    }
    addCustomer(customerData) {
        return this.httpService.postWithFormData('add-customer', customerData);
    }
    addSalesRepresentative(salesRepresentativeData){
        return this.httpService.postWithFormData('add-sales-representative', salesRepresentativeData);
    }
    addPhotoGrapher(sPhotoGrapherData){
        return this.httpService.postWithFormData('add-photographer', sPhotoGrapherData);
    }

}