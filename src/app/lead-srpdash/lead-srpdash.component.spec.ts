import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadSrpdashComponent } from './lead-srpdash.component';

describe('LeadSrpdashComponent', () => {
  let component: LeadSrpdashComponent;
  let fixture: ComponentFixture<LeadSrpdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadSrpdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadSrpdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
