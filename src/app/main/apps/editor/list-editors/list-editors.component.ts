import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ListingConstant } from 'app/common/constant/constant';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EditorDataSource } from './list-editor-data-source';
import { EditorService } from './list-editor.service';

@Component({
  selector: 'app-list-editors',
  templateUrl: './list-editors.component.html',
  styleUrls: ['./list-editors.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ListEditorsComponent implements OnInit {
  dataSource: EditorDataSource;
  displayedColumns = ['id', 'full_name', 'email', 'status', 'loginAsEditor', 'active'];
  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort: MatSort;
  pageEvent: PageEvent;
  pageIndex: number = 0;
  pageSize: number = ListingConstant.itemPerPage;
  constructor(
    public _editorService: EditorService
  ) {
  }


  ngOnInit(): void {
    this.dataSource = new EditorDataSource(this._editorService);
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
