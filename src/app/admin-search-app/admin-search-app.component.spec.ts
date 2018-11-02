import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSearchAppComponent } from './admin-search-app.component';

describe('AdminSearchAppComponent', () => {
  let component: AdminSearchAppComponent;
  let fixture: ComponentFixture<AdminSearchAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSearchAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSearchAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
