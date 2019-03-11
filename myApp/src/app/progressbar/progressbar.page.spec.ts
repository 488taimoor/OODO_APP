import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarPage } from './progressbar.page';

describe('ProgressbarPage', () => {
  let component: ProgressbarPage;
  let fixture: ComponentFixture<ProgressbarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressbarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
