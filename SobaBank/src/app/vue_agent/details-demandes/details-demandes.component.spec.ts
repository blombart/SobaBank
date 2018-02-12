import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDemandesComponent } from './details-demandes.component';

describe('DetailsDemandesComponent', () => {
  let component: DetailsDemandesComponent;
  let fixture: ComponentFixture<DetailsDemandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDemandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
