import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppointmentsApprovalComponent } from './admin-appointments-approval.component';

describe('AdminAppointmentsApprovalComponent', () => {
  let component: AdminAppointmentsApprovalComponent;
  let fixture: ComponentFixture<AdminAppointmentsApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAppointmentsApprovalComponent]
    });
    fixture = TestBed.createComponent(AdminAppointmentsApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
