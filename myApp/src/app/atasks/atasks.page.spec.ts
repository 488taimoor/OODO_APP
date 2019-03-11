import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtasksPage } from './atasks.page';

describe('AtasksPage', () => {
  let component: AtasksPage;
  let fixture: ComponentFixture<AtasksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtasksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
