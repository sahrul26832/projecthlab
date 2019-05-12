import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashLightPage } from './flash-light.page';

describe('FlashLightPage', () => {
  let component: FlashLightPage;
  let fixture: ComponentFixture<FlashLightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashLightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashLightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
