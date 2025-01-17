import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../models/pet.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-admin-petmatch-pets',
  templateUrl: './admin-petmatch-pets.component.html',
  styleUrls: ['./admin-petmatch-pets.component.css']
})
export class AdminPetmatchPetsComponent {
  isOwner = true; // Simulate the user being an owner
  isManager = false; // Simulate the user not being a manager

  pets!: Pet[];
  owner = localStorage.getItem('name');
  // Simulated list of pets
  /* pets = [
     {
       id: 1,
       name: 'Max',
       species: 'Dog',
       age: 4,
       specificNeeds: 'None',
       guardType: 'temporary',
       imageUrl: 'assets/mortadha.jpg', // Add image URL
       owner: 'Brahim'
     },
     {
       id: 2,
       name: 'Bella',
       species: 'Cat',
       age: 2,
       specificNeeds: 'Food allergies',
       guardType: 'definitive',
       imageUrl: 'assets/cat-sitting.jpg', // Add image URL
       owner: 'sedki'
     },
     {
       id: 3,
       name: 'Charlie',
       species: 'Rabbit',
       age: 3,
       specificNeeds: 'Avoid sunlight',
       guardType: 'temporary',
       imageUrl: 'assets/b2.jpg', // Add image URL
       owner: 'sedki'
     }
   ];
 */
  constructor(private router: Router, private petService: PetService) { }

  ngOnInit(): void {
    // Fetch pets for the logged-in user (or all pets)
    this.petService.getPetsByUserId("6751d7f3ed382f82c7a93c36").subscribe(
      (data) => {
        this.pets = data;
        console.log('Pets fetched successfully', this.pets);
      },
      (error) => {
        console.error('Error fetching pets', error);
      }
    );

  }

  // Remove a pet from the list
  removePet(pet: Pet) {
    if (confirm('Are you sure you want to delete this pet?')) {
      this.petService.deletePet(pet._id?.toString() || "").subscribe(
        (response) => {
          console.log('Pet deleted:', response);

        },
        (error) => {
          console.error('Error deleting pet:', error);
          alert('Error deleting pet');
        }
      );
    }
    location.reload();

  }

}
