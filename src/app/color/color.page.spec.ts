import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPage } from './color.page';

describe('ColorPage', () => {
  let component: ColorPage;
  let fixture: ComponentFixture<ColorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
