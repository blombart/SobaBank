import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaroComponent } from './navbaro.component';

describe('NavbaroComponent', () => {
  let component: NavbaroComponent;
  let fixture: ComponentFixture<NavbaroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbaroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
