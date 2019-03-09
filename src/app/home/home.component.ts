import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userloggedin = false;

  constructor() { }

  ngOnInit() {
    this.checkuserloggedin();
  }

  checkuserloggedin() {
    if (localStorage.getItem('token')) {
      this.userloggedin = true;
    }
  }


}
