import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { UserDetails } from '../interfaces/user-details';
import { ProfileService } from '../services/profile/profile.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  details = {} as UserDetails;

  constructor(private auth: AuthenticationService, private profile: ProfileService) { }

  ngOnInit() {
    // this.getProfile();
  }

  getProfile() {
    return this.profile.getProfile().subscribe(user => {
      this.details = user;
      console.log(this.details);
    }, (err) => {
      console.error(err);
    });
  }

}
