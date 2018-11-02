import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSearchBlmComponent } from './admin-search-blm.component';

describe('AdminSearchBlmComponent', () => {
  let component: AdminSearchBlmComponent;
  let fixture: ComponentFixture<AdminSearchBlmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSearchBlmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSearchBlmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
