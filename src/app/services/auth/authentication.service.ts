// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // private apiUrl = environment.apiURL;
  private httpOptions = {};


  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  isAuthenticated() {
      return localStorage.getItem('authToken');
  }


  login(email: string, password: string) {
    this.fireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!', value);
        localStorage.setItem('currentUser', value.user.uid);
        this.router.navigate(['/dashboard']);

      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.fireAuth.auth.signOut();
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }



  dologin(value) {
   return firebase.auth().signInWithEmailAndPassword(value.email, value.password);
      }

  // login(username: string, password: string) {
  //     return this.http.post<any>(`${this.apiUrl}/users/authenticate`, { username: username, password: password })
  //         .pipe(map(user => {
  //             // login successful if there's a jwt token in the response
  //             if (user && user.token) {
  //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
  //                 localStorage.setItem('currentUser', JSON.stringify(user));
  //             }

  //             return user;
  //         }));
  // }

  // logout() {
  //     // remove user from local storage to log user out
  //     localStorage.removeItem('currentUser');
  //     this.router.navigate(['/login']);
  // }
}
