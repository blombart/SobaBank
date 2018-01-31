/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ForminscritionComponent } from './forminscrition.component';

describe('ForminscritionComponent', () => {
  let component: ForminscritionComponent;
  let fixture: ComponentFixture<ForminscritionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForminscritionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForminscritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
