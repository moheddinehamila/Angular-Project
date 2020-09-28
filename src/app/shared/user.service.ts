import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from './User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.api;

  constructor(private http: HttpClient) {
  }

  bservab;

  login(user: User): Observable<any> {
    console.log(user.email + '...' + user.password);
    return this.http.put<any>(this.url + 'connect/' + user.email + '/' + user.password, user);
  }

  register(user: User): Observable<any> {
    return this.http.put<any>(this.url + 'add/', user);
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.url + 'users');
  }
}
