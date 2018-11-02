import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserDetails } from '../../interfaces/user-details';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class ProfileService {
  details = {} as UserDetails;
  userType = '';

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  public updateProfile(data: UserDetails) {
    return this.http.post('/api/updateProfile', data, { headers: { Authorization: `Bearer ${this.auth.getToken()}` }});
  }
  public getProfile(): Observable<any> {
    return this.http.get('/api/profile', { headers: { Authorization: `Bearer ${this.auth.getToken()}` }});
  }
  public userExists(email) {
    console.log('got into profile service ' + email);
    return this.http.post('/api/userExists', email);
  }
}
