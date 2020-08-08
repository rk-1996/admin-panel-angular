import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AdminService } from './list-data.service';
import { catchError, finalize } from 'rxjs/operators';
import { Status } from '../../../../enums/status.enum';
import { ListingConstant } from '../../../../common/constant/constant';
import { ApiService } from '../../../../common/services/api.service';
export class AdminDataSource implements DataSource<any> {

    private adminListSubject = new BehaviorSubject<any>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private _adminService: AdminService, private _apiService?: ApiService) { }

    connect(collectionViewer: CollectionViewer): Observable<any> {
        return this.adminListSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        console.log('TEST');
        this.adminListSubject.complete();
        this.loadingSubject.complete();
    }

    loadList(sortDirection = 'asc', pageIndex = 0, pageSize = ListingConstant.itemPerPage) {
        this.loadingSubject.next(true);
        this._adminService.getAdminList({ sortDirection: sortDirection, pageIndex: pageIndex, pageSize: pageSize }).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        ).subscribe(list => {
            list.map((admin) => {
                if (admin.status == '0') {
                    admin.status = Status.INACTIVE
                } else if (admin.status == '1') {
                    admin.status = Status.ACTIVE
                }
            });
            this.adminListSubject.next(list);
        });
    }

}