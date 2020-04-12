/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyFotoComponent } from './my-foto.component';

describe('MyFotoComponent', () => {
  let component: MyFotoComponent;
  let fixture: ComponentFixture<MyFotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
