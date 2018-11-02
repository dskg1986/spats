import { TestBed, inject } from '@angular/core/testing';

import { SrpApplicationService } from './srp-application.service';

describe('SrpApplicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrpApplicationService]
    });
  });

  it('should be created', inject([SrpApplicationService], (service: SrpApplicationService) => {
    expect(service).toBeTruthy();
  }));
});
