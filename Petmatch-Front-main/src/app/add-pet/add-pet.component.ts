import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../services/pet.service';
import { Pet } from '../models/pet.model';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent {
  pet = new Pet();
  selectedImage: File | undefined;


  constructor(private petService: PetService, private router: Router) { }

  // Handle file input change event to capture the selected image
  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  // Simulate adding a pet and redirect to the My Pets page
  addPet() {
    // Mock adding pet to the list
    if (!this.selectedImage) {
      alert('Please select an image for the pet.');
      return;
    }

    if (this.pet.name == "") {
      alert('Please enter the name of the pet.');
      return;
    }
    if (this.pet.species == "") {
      alert('Please enter the species of the pet.');
      return;
    }
    if (this.pet.age == null) {
      alert("Please enter the age of the pet.")
      return;
    }

    const idUser = localStorage.getItem('id') || "";
    console.log(idUser);
    const formData = new FormData();
    formData.append('name', this.pet.name);
    formData.append('species', this.pet.species);
    formData.append('age', this.pet.age.toString()); // Convert number to string
    formData.append('specificNeeds', this.pet.specificNeeds || ''); // Add specific needs if present
    formData.append('image', this.selectedImage, this.selectedImage.name); // Append the image file
    formData.append('userId', idUser);

    // Call the service to send the FormData to the server
    this.petService.createPet(formData).subscribe(
      (response) => {
        console.log('Pet added successfully', response);
        this.router.navigate(['/my-pets']); // Redirect to the pet list or profile page
      },
      (error) => {
        console.error('Error adding pet', error);
        alert('Error adding pet');
      }
    );

    console.log('New Pet Added:', this.pet);

    // Optionally, navigate to the My Pets page or reset the form
    //this.router.navigate(['/my-pets']);
  }
}
