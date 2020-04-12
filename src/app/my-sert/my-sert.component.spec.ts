/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MySertComponent } from './my-sert.component';

describe('MySertComponent', () => {
  let component: MySertComponent;
  let fixture: ComponentFixture<MySertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
