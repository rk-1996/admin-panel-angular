import { Injectable } from '@angular/core';
import { CanLoad, Router, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthGuardService implements CanLoad {
  constructor(private router: Router) {
  }

  canLoad(route: Route): boolean {

    //determine whether you want to load the module
    //return true or false
    if (localStorage.getItem('user')) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
} 