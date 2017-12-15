import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBootstrapComponent } from './ui-bootstrap.component';

describe('UiBootstrapComponent', () => {
  let component: UiBootstrapComponent;
  let fixture: ComponentFixture<UiBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
