import { Component, OnInit } from '@angular/core';
import { SrpApplicationService } from '../services/application/srp-application.service';
import { SRPApplication } from '../interfaces/SRPApplication';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from '../services/states/states.service';
import { State } from '../interfaces/state';
import { Observable } from 'rxjs';
import { FilterPipe } from './callback.pipe';

@Component({
  selector: 'app-srp-application',
  templateUrl: './srp-application.component.html',
  styleUrls: ['./srp-application.component.css']
})

export class SrpApplicationComponent implements OnInit {

  constructor(
    // private filterPipe: FilterPipe,
    private router: Router,
    private appService: SrpApplicationService,
    private stateService: StateService) {
  }

  app = {} as SRPApplication;
  states = [] as State[];
  // filteredStates = [] as State[];
  countries = [{'name': 'Canada'}, {'name': 'USA'}];
  country = 'USA';

  ngOnInit() {
    this.getFilteredStates(this.country);
    // this.getStates();
    console.log(this.countries);
  }

  getStates() {
    console.log('Got into getStates');
    return this.stateService.getStates()
    .subscribe(states => {
        this.states = states as State[];
        console.log(this.states);
      });
  }

  getFilteredStates(country) {
    console.log('Got into Filtered States');
    return this.states = this.stateService.filterStates(country);
  }

  cancel() {
    alert('Are you sure you want to cancel. Any changes will not be saved.');
    return this.router.navigateByUrl('/appDash');
  }

  save() {
    this.app.status = 'Pending Submit';
    this.appService.saveApplication(this.app);
    alert('Application Saved.  Good Work!');
    // return this.router.navigateByUrl('/appDash');
  }

  submit() {
    alert('Application Submitted.  Yippy!!');
    // return this.router.navigateByUrl('/appDash');
  }

}
