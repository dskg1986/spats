import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from '../../interfaces/state';
// import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class StateService {

  states = [] as State[];

  constructor(private http: HttpClient ) { }

  getStates(): Observable<State[]> {
   return this.http.get('/assets/data/states.json')
    .pipe(
      map((res: any) => res)
    );
  }

  filterStates(term: string) {
    console.log('got into filtered states service: ' + term);
    this.getStates().subscribe(states => {
      // console.log(this.states);
    });
    console.log(this.states.filter((item) => item.name === term));
    return this.states.filter((item) => item.name === term);
  }

  filterThing() {
  http.get('/assets/data/states.json')
  .flatMap((response) => response.json())
  .filter((state) => state.name > 'USA')
  .map((state) => state)
  .subscribe((data) => {
    this.states.push(data);
  });
}
}


}
