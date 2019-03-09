import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userloggedin = this.navbar.userloggedin;

  isCollapsed = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private navbar: NavbarService
    ) { }

  ngOnInit() {
    this.navbar.setNavBarState();
  }

  logoutUser() {
    this.authService.logout();
    this.router.navigateByUrl('home');
  }

}
