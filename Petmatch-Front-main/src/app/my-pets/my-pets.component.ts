import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../models/pet.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css']
})
export class MyPetsComponent implements OnInit {
  isOwner = true; // Simulate the user being an owner
  isManager = false; // Simulate the user not being a manager

  pets!: Pet[];
  owner = localStorage.getItem('name');
  /*
  // Simulated list of pets
  pets = [
    {
      id: 1,
      name: 'Max',
      species: 'Dog',
      age: 4,
      specificNeeds: 'None',
      guardType: 'temporary',
      imageUrl: 'assets/dog1.jpg' // Add image URL
    },
    {
      id: 2,
      name: 'Bella',
      species: 'Cat',
      age: 2,
      specificNeeds: 'Food allergies',
      guardType: 'definitive',
      imageUrl: 'assets/cat-sitting.jpg' // Add image URL
    },
    {
      id: 3,
      name: 'Charlie',
      species: 'Rabbit',
      age: 3,
      specificNeeds: 'Avoid sunlight',
      guardType: 'temporary',
      imageUrl: 'assets/b2.jpg' // Add image URL
    }
  ];*/

  constructor(private router: Router, private petService: PetService) { }

  ngOnInit(): void {
    this.petService.getPetsByUserId(localStorage.getItem('id') || "").subscribe(
      (data) => {
        this.pets = data;
        console.log('Pets fetched successfully', this.pets);
      },
      (error) => {
        console.error('Error fetching pets', error);
      }
    );
  }

  // Redirect to the edit pet page
  editPet(pet: Pet) {
    localStorage.setItem('name', pet.name);
    localStorage.setItem('petid', pet._id?.toString() || "");
    localStorage.setItem('species', pet.species);
    localStorage.setItem('age', pet.age.toString() || "");
    localStorage.setItem('specificNeeds', pet.specificNeeds?.toString() || "");
    localStorage.setItem('user', pet.userId);



    this.router.navigate(["/edit-pet"]);
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
