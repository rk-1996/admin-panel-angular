import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AdminListService } from '../admin-list.service';
import { AdminDataSource } from './list-admin-data-source';
import { fuseAnimations } from '../../../../../@fuse/animations/index';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ListAdminComponent implements OnInit {
  dataSource: AdminDataSource | null;
  displayedColumns = ['id', 'fullName', 'email', 'status', 'loginAsAdmin', 'active'];
  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort: MatSort;

  constructor(
    private _adminListService: AdminListService
  ) {
  }


  ngOnInit(): void {
    this.dataSource = new AdminDataSource(this._adminListService, this.paginator, this.sort);
  }
}
