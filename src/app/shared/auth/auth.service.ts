import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable, Subject} from 'rxjs';

import { AuthData } from './auth-data.model';
import {environment} from '../../../environments/environment';
import Swal from "sweetalert2";
import {User} from "../User.model";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTAuthServiceimer: any;
  private userId: number;
  private authStatusListener = new Subject<boolean>();
  u: User;
  constructor(private http: HttpClient, private router: Router) {}

  getIsAuth() {
    return this.isAuthenticated;
  }

  login(email: string, password: string) {
    const authData: AuthData = { email, password };
    this.http.put<any>(environment.api + 'connect/' + email + '/' + password, authData)
       .subscribe((resp) => {
        if (resp != null) {
          if (resp.role === 'Client') {
            this.router.navigate(['/y']);
          } else if (resp.role === 'Owner') {
            this.router.navigate(['/x']);
          } else {

            this.router.navigate(['/admin']);
          }
          this.isAuthenticated = true;
          localStorage.setItem('user', JSON.stringify(resp));

        } else {
          Swal.fire(
            'Something went wrong',
            'username or password incorrect please check engine',
            'error'
          );
          this.router.navigate(['/login']);
        }
      },
      error => {
        Swal.fire(
          'Something went wrong',
          'username or password incorrect please check engine',
          'error'
        );
        this.router.navigate(['/login']);
      });

  }


  logout() {

    this.isAuthenticated = false;
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
