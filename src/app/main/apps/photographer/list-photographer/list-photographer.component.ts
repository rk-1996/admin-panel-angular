import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PhotographerDataSource } from './list-photographer-data-source';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PhotographerService } from '../photographer-list.service';
import { fuseAnimations } from '@fuse/animations';
import { ListingConstant } from '../../../../common/constant/constant';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-photographer',
  templateUrl: './list-photographer.component.html',
  styleUrls: ['./list-photographer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ListPhotographerComponent implements OnInit {
  dataSource: PhotographerDataSource | null;
  displayedColumns = ['id', 'full_name', 'email', 'status', 'loginAsPhotographer', 'is_subscribe', 'active'];
  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort: MatSort;
  pageIndex: number = 0;
  pageSize: number = ListingConstant.itemPerPage;
  pageSizeOptions = ListingConstant.pageSizeOptions;
  constructor(
    public _photographerService: PhotographerService
  ) {
  }


  ngOnInit(): void {
    this.dataSource = new PhotographerDataSource(this._photographerService);
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