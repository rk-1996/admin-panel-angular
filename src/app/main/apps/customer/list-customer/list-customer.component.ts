import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { fuseAnimations } from '../../../../../@fuse/animations/index';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CustomerDataSource } from './list-customer-data-source';
import { CustomerService } from '../customer-list.service';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ListingConstant } from 'app/common/constant/constant';

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
    pageEvent: PageEvent;
    pageIndex: number = 0;
    pageSize: number = ListingConstant.itemPerPage;
    pageSizeOptions = ListingConstant.pageSizeOptions;

    constructor(
        public _customerService: CustomerService
    ) {
    }


    ngOnInit(): void {
        this.dataSource = new CustomerDataSource(this._customerService);
        this.loadList();
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                tap(() => this.loadList())
            )
            .subscribe();
    }
    loadList() {
        this.dataSource.loadList(this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
        setTimeout(() => {
            const matTable = document.getElementById('matTable');
            matTable.scrollTop = 0;
        }, 1);
    }
}


