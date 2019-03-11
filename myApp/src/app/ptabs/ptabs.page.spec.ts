import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtabsPage } from './ptabs.page';

describe('PtabsPage', () => {
  let component: PtabsPage;
  let fixture: ComponentFixture<PtabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
