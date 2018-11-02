import { Component, OnInit } from '@angular/core';
import { AuthenticationService,  } from '../services/authentication/authentication.service';
import { ProfileService } from '../services/profile/profile.service';
import { Observable } from 'rxjs';
import { UserDetails } from '../interfaces/user-details';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.css']
})
export class AccountProfileComponent implements OnInit {
  details = {} as UserDetails;
  response: any = null;
  viewOnly = true;

  constructor(private auth: AuthenticationService, private profile: ProfileService) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.profile.getProfile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });
  }

  updateProfile() {
    console.log(this.details);
    this.profile.updateProfile(this.details).subscribe(
      data => {
        // refresh the list
        alert('Account Updated.');
        this.edit();
        this.profile.getProfile();
        return true;
      },
      error => {
        console.error('Error saving Profile!');
        return console.log(error);
      }
    );
  }

  edit() {
    // tslint:disable-next-line:no-unused-expression
    this.viewOnly = !this.viewOnly;
  }

}
