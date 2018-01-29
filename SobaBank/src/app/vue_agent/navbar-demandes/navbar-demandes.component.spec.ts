import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDemandesComponent } from './navbar-demandes.component';

describe('NavbarDemandesComponent', () => {
  let component: NavbarDemandesComponent;
  let fixture: ComponentFixture<NavbarDemandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarDemandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
