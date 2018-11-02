import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTcComponent } from './account-tc.component';

describe('AccountTcComponent', () => {
  let component: AccountTcComponent;
  let fixture: ComponentFixture<AccountTcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
