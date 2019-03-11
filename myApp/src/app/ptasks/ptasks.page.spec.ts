import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtasksPage } from './ptasks.page';

describe('PtasksPage', () => {
  let component: PtasksPage;
  let fixture: ComponentFixture<PtasksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtasksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
