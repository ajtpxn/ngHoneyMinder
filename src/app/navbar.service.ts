import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  userloggedin = false;

  constructor() {
    this.setNavBarState();
   }

  setNavBarState( ) {
    if (localStorage.getItem('token')) {
      this.userloggedin = true;
    }
  }

}
