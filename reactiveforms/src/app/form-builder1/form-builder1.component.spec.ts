import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilder1Component } from './form-builder1.component';

describe('FormBuilder1Component', () => {
  let component: FormBuilder1Component;
  let fixture: ComponentFixture<FormBuilder1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilder1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuilder1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
