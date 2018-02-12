import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAgentsComponent } from './gestion-agents.component';

describe('GestionAgentsComponent', () => {
  let component: GestionAgentsComponent;
  let fixture: ComponentFixture<GestionAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
