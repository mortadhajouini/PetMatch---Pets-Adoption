import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPetComponent } from './admin-add-pet.component';

describe('AdminAddPetComponent', () => {
  let component: AdminAddPetComponent;
  let fixture: ComponentFixture<AdminAddPetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddPetComponent]
    });
    fixture = TestBed.createComponent(AdminAddPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
