import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  petId: string = ''; // The ID of the pet to update
  name: string = '';
  species: string = '';
  age: string | null = null;
  specificNeeds: string = '';
  userId: string = ''; // Owner ID of the pet
  image: File | null = null;

  constructor(private petService: PetService, private router: Router) { }


  ngOnInit(): void {
    this.name = localStorage.getItem('name') || "";
    this.petId = localStorage.getItem('petid') || "";
    this.species = localStorage.getItem('species') || "hhh";
    this.age = localStorage.getItem('age') || null;
    this.specificNeeds = localStorage.getItem('specificNeeds') || "";
    this.userId = localStorage.getItem('id') || "";
    localStorage.removeItem('name');
    localStorage.removeItem('petid');
    localStorage.removeItem('species');
    localStorage.removeItem('age');
    localStorage.removeItem('specificNeeds');
    localStorage.removeItem('user');


  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('species', this.species);
    formData.append('age', this.age?.toString() || '');
    formData.append('specificNeeds', this.specificNeeds);
    formData.append('userId', this.userId);

    if (this.image) {
      formData.append('image', this.image, this.image.name);  // Append image file if selected
    }

    // Call the updatePet API to send the data
    this.petService.updatePet(this.petId, formData).subscribe(
      (updatedPet) => {
        console.log('Pet updated successfully:', updatedPet);
        alert('Pet updated successfully!');
        this.router.navigate(['/my-pets']);  // Redirect after success
      },
      (error) => {
        console.error('Error updating pet:', error);
        alert('Error updating pet!');
      }
    );
  }

  // Handle file selection for the image
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.image = event.target.files[0];
    }
  }

}
