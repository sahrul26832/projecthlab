import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorScreenPage } from './color-screen.page';

describe('ColorScreenPage', () => {
  let component: ColorScreenPage;
  let fixture: ComponentFixture<ColorScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
