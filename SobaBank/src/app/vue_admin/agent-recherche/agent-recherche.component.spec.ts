import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentRechercheComponent } from './agent-recherche.component';

describe('AgentRechercheComponent', () => {
  let component: AgentRechercheComponent;
  let fixture: ComponentFixture<AgentRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
