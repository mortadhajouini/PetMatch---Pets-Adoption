import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPetmatchPetsComponent } from './admin-petmatch-pets.component';

describe('AdminPetmatchPetsComponent', () => {
  let component: AdminPetmatchPetsComponent;
  let fixture: ComponentFixture<AdminPetmatchPetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPetmatchPetsComponent]
    });
    fixture = TestBed.createComponent(AdminPetmatchPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
