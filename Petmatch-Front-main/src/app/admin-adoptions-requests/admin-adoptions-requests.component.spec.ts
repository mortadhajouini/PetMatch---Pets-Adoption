import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdoptionsRequestsComponent } from './admin-adoptions-requests.component';

describe('AdminAdoptionsRequestsComponent', () => {
  let component: AdminAdoptionsRequestsComponent;
  let fixture: ComponentFixture<AdminAdoptionsRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAdoptionsRequestsComponent]
    });
    fixture = TestBed.createComponent(AdminAdoptionsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
