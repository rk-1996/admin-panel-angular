import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fuseAnimations } from '../../../../../@fuse/animations/index';
import { ListingConstant } from '../../../../common/constant/constant';
import { AdminService } from './list-admin.service';
import { AdminDataSource } from './list-admin-data-source';
import { tap } from 'rxjs/operators';
import { merge } from 'rxjs';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ListAdminComponent implements OnInit {
  dataSource: AdminDataSource;
  displayedColumns = ['id', 'full_name', 'email', 'status', 'loginAsAdmin', 'active'];
  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort: MatSort;
  pageEvent: PageEvent;
  pageIndex: number = 0;
  pageSize: number = ListingConstant.itemPerPage;
  pageSizeOptions = ListingConstant.pageSizeOptions;
  constructor(
    public _adminService: AdminService
  ) {
  }


  ngOnInit(): void {
    this.dataSource = new AdminDataSource(this._adminService);
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
