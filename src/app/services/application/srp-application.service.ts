import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { SRPApplication } from '../../interfaces/SRPApplication';

@Injectable()
export class SrpApplicationService {

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  saveApplication(app: SRPApplication) {
    console.log(app);
    if (app._id) {
      return this.http.put('/api/updateApplication', app, { headers: { Authorization: `Bearer ${this.auth.getToken()}` }});
    } else {
      return this.http.post('/api/updateApplication', app, { headers: { Authorization: `Bearer ${this.auth.getToken()}` }});
    }
  }

}
