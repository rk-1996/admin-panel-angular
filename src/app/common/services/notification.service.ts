import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export declare type NotificationType = 'success' | 'error';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _snackBar: MatSnackBar) { }
  openSnakBar(message: string, notificationType: NotificationType) {
    const notifiactionTypeClassMapping = {
      success: 'green-snackbar',
      error: 'red-snackbar'
    }
    this._snackBar.open(message, 'Close', {
      duration: 500000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: [notifiactionTypeClassMapping[notificationType]]
    });
  }
}
