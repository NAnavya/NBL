import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuildercompoComponent } from './form-buildercompo.component';

describe('FormBuildercompoComponent', () => {
  let component: FormBuildercompoComponent;
  let fixture: ComponentFixture<FormBuildercompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuildercompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuildercompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
