import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppointmentsRequestsComponent } from './admin-appointments-requests.component';

describe('AdminAppointmentsRequestsComponent', () => {
  let component: AdminAppointmentsRequestsComponent;
  let fixture: ComponentFixture<AdminAppointmentsRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAppointmentsRequestsComponent]
    });
    fixture = TestBed.createComponent(AdminAppointmentsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
