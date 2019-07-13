import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth/authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  error: string;
  loading = false;

  constructor(
    private auth: AuthenticationService,
    private fb: FormBuilder,
    private router: Router) { }


  ngOnInit() {
    // this.router.navigate(['/backoffice']); // borrar cuando se tenga el login

    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }

    this.loginform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get fLogin() { return this.loginform.controls; }


  public login() {
    this.loading = true;
    this.auth.login(this.fLogin.username.value, this.fLogin.password.value);
  }
}
