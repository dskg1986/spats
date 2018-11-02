import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSrpdashComponent } from './app-srpdash.component';

describe('AppSrpdashComponent', () => {
  let component: AppSrpdashComponent;
  let fixture: ComponentFixture<AppSrpdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSrpdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSrpdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
