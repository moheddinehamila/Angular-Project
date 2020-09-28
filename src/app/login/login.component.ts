import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../shared/User.model';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from '../shared/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading = false;

  constructor(public authService: AuthService, private router: Router) {
  }

  // tslint:disable-next-line:typedef
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // this.isLoading = true;
    this.authService.login(form.value.email, form.value.password)
  }
}
