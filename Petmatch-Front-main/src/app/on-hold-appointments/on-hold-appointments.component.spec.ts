import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnHoldAppointmentsComponent } from './on-hold-appointments.component';

describe('OnHoldAppointmentsComponent', () => {
  let component: OnHoldAppointmentsComponent;
  let fixture: ComponentFixture<OnHoldAppointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnHoldAppointmentsComponent]
    });
    fixture = TestBed.createComponent(OnHoldAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
