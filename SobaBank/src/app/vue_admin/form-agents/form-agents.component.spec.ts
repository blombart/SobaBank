import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgentsComponent } from './form-agents.component';

describe('FormAgentsComponent', () => {
  let component: FormAgentsComponent;
  let fixture: ComponentFixture<FormAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
