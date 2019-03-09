import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username = 'none';

  firstName = 'none';

  lastName = 'none';

  email = 'none';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.username = localStorage.getItem('username');
    this.userService.getCurrentUser().subscribe(
      data => {
        console.log('Data, data, data:');
        console.log(data);
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
      },
      err => {
        return console.error('Error getting current user' + err);
      }

    );
  }

}
