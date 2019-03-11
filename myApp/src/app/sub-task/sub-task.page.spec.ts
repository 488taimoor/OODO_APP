import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTaskPage } from './sub-task.page';

describe('SubTaskPage', () => {
  let component: SubTaskPage;
  let fixture: ComponentFixture<SubTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
