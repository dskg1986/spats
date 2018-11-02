import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { TokenPayload } from '../interfaces/token';
import { ProfileService } from '../services/profile/profile.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  credentials = {} as TokenPayload;
  response: Object;

  constructor(private auth: AuthenticationService, private router: Router, private profile: ProfileService) { }

  ngOnInit() {

  }

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/home');
    }, (err) => {
      console.error(err.error.message);
      this.credentials.email = '';
      this.credentials.password = '';
      alert(err.error.message);
    });
  }

  sendPasswordEmail() {
    this.userExists();
    /*
    if (this.response === 'true') {
      alert('Please follow the directions in the email sent to ' + this.credentials.email + ' for resetting your password.');
      this.credentials.email = '';
      this.credentials.password = '';
    } else {
      alert('No user found with the enail address entered!!');
    }
    */
  }

  userExists() {
    console.log('got into user exists ' + this.credentials.email);
    this.profile.userExists(this.credentials.email).subscribe(res => {
      this.response = res;
      alert('un the asfjkh ' + this.response);
    }, (err) => {
      console.error(err.error.message);
      this.credentials.email = '';
      this.credentials.password = '';
      alert('in error ' + err.error.message);
    });

  }

}
