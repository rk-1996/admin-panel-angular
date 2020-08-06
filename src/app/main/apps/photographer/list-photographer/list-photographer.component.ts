import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { photographerDataSource } from './list-photographer-data-source';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PhotographerListService } from '../photographer-list.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-list-photographer',
  templateUrl: './list-photographer.component.html',
  styleUrls: ['./list-photographer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ListPhotographerComponent implements OnInit {
  dataSource: photographerDataSource | null;
  displayedColumns = ['id', 'fullName', 'email', 'status', 'loginAsPhotographer', 'is_subscribe', 'active'];
  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort: MatSort;

  constructor(
      private _photographerListService: PhotographerListService
  ) {
  }


  ngOnInit(): void {
      this.dataSource = new photographerDataSource(this._photographerListService, this.paginator, this.sort);
  }
}