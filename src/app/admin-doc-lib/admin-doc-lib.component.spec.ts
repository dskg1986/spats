import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDocLibComponent } from './admin-doc-lib.component';

describe('AdminDocLibComponent', () => {
  let component: AdminDocLibComponent;
  let fixture: ComponentFixture<AdminDocLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDocLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDocLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
