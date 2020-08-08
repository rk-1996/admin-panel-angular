import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  constructor() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.changeUserData(user);
    }
  }
  //Using any
  private userDataSource = new BehaviorSubject('');
  currentUserData = this.userDataSource.asObservable();
  changeUserData(userData) {
    this.userDataSource.next(userData);
  }

}
