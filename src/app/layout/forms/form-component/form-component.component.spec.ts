import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponentComponent } from './form-component.component';

describe('FormComponentComponent', () => {
  let component: FormComponentComponent;
  let fixture: ComponentFixture<FormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
