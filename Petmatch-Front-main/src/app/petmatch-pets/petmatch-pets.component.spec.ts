import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetmatchPetsComponent } from './petmatch-pets.component';

describe('PetmatchPetsComponent', () => {
  let component: PetmatchPetsComponent;
  let fixture: ComponentFixture<PetmatchPetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetmatchPetsComponent]
    });
    fixture = TestBed.createComponent(PetmatchPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
