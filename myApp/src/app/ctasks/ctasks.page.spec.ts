import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtasksPage } from './ctasks.page';

describe('CtasksPage', () => {
  let component: CtasksPage;
  let fixture: ComponentFixture<CtasksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtasksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
