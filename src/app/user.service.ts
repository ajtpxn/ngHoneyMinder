import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { User } from './models/user';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username = localStorage.getItem('username');

  private url = environment.baseUrl + 'api/';

  private token = localStorage.getItem('token');

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${this.token}`
    })
  };

  constructor(private http: HttpClient, private authService: AuthService) {}

  getCurrentUser() {
    console.log('***token***:', this.token);
    console.log('***httpOptions***:', this.httpOptions);
    return this.http
      .get<User>(this.url + 'user/' + this.username, this.httpOptions)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error listing all Todos');
        })
      );
  }
}
