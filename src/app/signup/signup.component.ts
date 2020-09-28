import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthService} from '../shared/auth/auth.service';
import {User} from "../shared/User.model";
import {UserService} from "../shared/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit{
  isLoading = false;
  user: User = new User()
  form: FormGroup;
  constructor(public authService: UserService, private router: Router) {}


  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      fname: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [Validators.required]}),
      password: new FormControl(null, { validators: [Validators.required] }),
      adress: new FormControl(null, { validators: [Validators.required] }),
      role: new FormControl(null, { validators: [Validators.required] }),
    });
  }
  onSignup() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    this.user.adress = this.form.value.adress;
    this.user.password = this.form.value.password;
    this.user.email = this.form.value.email;
    this.user.family_name = this.form.value.fname;
    this.user.name = this.form.value.name;
    this.user.role = this.form.value.role;
    this.authService.register(this.user).subscribe((res) => {
      if (res) {
        this.router.navigate(['/login'])
      }
    });
  }

}

