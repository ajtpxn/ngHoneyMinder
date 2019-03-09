import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = environment.baseUrl + 'register';
  private authUrl = environment.baseUrl + 'authenticate';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  login(username, password) {
    const token = this.generateBasicAuthToken(username, password);
    const headers = new HttpHeaders()
      .set('Authorization', `Basic ${token}`);
    return this.http
      .get(this.authUrl, {headers})
      .pipe(
        tap((res) => {
          localStorage.setItem('token', token);
          localStorage.setItem('username', username);
          window.location.reload();
          return res;
        }),
        catchError((err: any) => {
          console.log(err);
          return throwError('Login Error');
        })
      );
}

  generateBasicAuthToken(username, password) {
    return btoa(`${username}:${password}`);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.reload();
  }

  checkLogin() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  register(user) {
    // create request to register a new account
    return this.http.post(this.registerUrl, user).pipe(
      tap(res => {
        // create a user and then upon success, log them in
        console.log('registered!');
        console.log(user.username);
        console.log(user.password);
        this.login(user.username, user.password);
      }),
      catchError((err: any) => {
        console.log(err);
        return throwError('problem registering');
      })
    );
  }
}
