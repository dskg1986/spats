import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { TokenPayload } from '../interfaces/token';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})

export class CreateAccountComponent implements OnInit {
  credentials = {} as TokenPayload;
  agreeValue: false;

  constructor(private auth: AuthenticationService, private router: Router) { }

  getUserType() {
    if (this.credentials.email.toLowerCase().endsWith('@blm.gov')) {
      // tslint:disable-next-line:no-unused-expression
      this.credentials.userType = 'Internal';
    } else {
      // tslint:disable-next-line:no-unused-expression
      this.credentials.userType = 'External';
    }
    console.log(this.credentials.userType);
  }

  register() {
    console.log('Got into register');
    this.getUserType();
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }

  ngOnInit() {
  }

}
