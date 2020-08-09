import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ListingConstant } from 'app/common/constant/constant';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SalesRepresentativeDataSource } from './list-sales-representative-data-source';
import { SalesRepresentativeService } from './sales-representative-list.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-list-sales-representative',
  templateUrl: './list-sales-representative.component.html',
  styleUrls: ['./list-sales-representative.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ListSalesRepresentativeComponent implements OnInit {
  dataSource: SalesRepresentativeDataSource | null;
  displayedColumns = ['full_name', 'username', 'email', 'status', 'login_as_customer', 'is_subscribe', 'active'];
  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort: MatSort;
  pageEvent: PageEvent;
  pageIndex: number = 0;
  pageSize: number = ListingConstant.itemPerPage;
  pageSizeOptions = ListingConstant.pageSizeOptions;
  constructor(
    public _salesRepresentativeService: SalesRepresentativeService
  ) {
  }


  ngOnInit(): void {
    this.dataSource = new SalesRepresentativeDataSource(this._salesRepresentativeService);
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


