import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { fuseAnimations } from '../../../../../@fuse/animations/index';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CustomerDataSource } from './list-customer-data-source';
import { CustomerListService } from '../customer-list.service';
// import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

@Component({
    selector: 'app-list-customer',
    templateUrl: './list-customer.component.html',
    styleUrls: ['./list-customer.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ListCustomerComponent implements OnInit {
    dataSource: CustomerDataSource | null;
    displayedColumns = ['id', 'full_name', 'email', 'status', 'login_as_customer', 'is_subscribe', 'active'];
    @ViewChild(MatPaginator, { static: true })
    paginator: MatPaginator;

    @ViewChild(MatSort, { static: true })
    sort: MatSort;

    constructor(
        private _customerListService: CustomerListService
    ) {
    }


    ngOnInit(): void {
        this.dataSource = new CustomerDataSource(this._customerListService, this.paginator, this.sort);
    }
}


