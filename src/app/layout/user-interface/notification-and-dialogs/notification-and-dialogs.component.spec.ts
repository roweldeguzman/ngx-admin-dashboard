import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationAndDialogsComponent } from './notification-and-dialogs.component';

describe('NotificationAndDialogsComponent', () => {
  let component: NotificationAndDialogsComponent;
  let fixture: ComponentFixture<NotificationAndDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationAndDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationAndDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
