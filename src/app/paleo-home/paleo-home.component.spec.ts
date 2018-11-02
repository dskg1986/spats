import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaleoHomeComponent } from './paleo-home.component';

describe('PaleoHomeComponent', () => {
  let component: PaleoHomeComponent;
  let fixture: ComponentFixture<PaleoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaleoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaleoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
