import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  constructor() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.changeUserName(user?.full_name);
    }
  }
  //Using any
  private userNameSource = new BehaviorSubject('');
  currentUserName = this.userNameSource.asObservable();
  changeUserName(userName: string) {
    this.userNameSource.next(userName);
  }

}
