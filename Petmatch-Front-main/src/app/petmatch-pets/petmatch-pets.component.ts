import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../models/pet.model';
import { PetService } from '../services/pet.service';
import { Adoption } from '../models/adoption.model';
import { AdoptionService } from '../services/adoption.service';

@Component({
  selector: 'app-my-pets',
  templateUrl: './petmatch-pets.component.html',
  styleUrls: ['./petmatch-pets.component.css']
})
export class PetmatchPetsComponent implements OnInit {
  adoption = {
    userId: "",
    petId: "",
    date: '',
    status: 'onhold'
  };

  // Simulated list of pets
  pets!: Pet[];
  adoptionRequests!: Adoption[];

  constructor(private adoptionService: AdoptionService, private router: Router, private petService: PetService) { }

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

    this.adoptionService.getAllAdoptions().subscribe(
      (data) => {
        this.adoptionRequests = data.filter(adoption => adoption.status === 'onhold'); // Assign the fetched adoptions to the array
        console.log('Adoptions fetched successfully', this.adoptionRequests);
      },
      (error) => {
        console.error('Error fetching adoptions', error); // Handle any errors
      }
    );
  }
  createAdoption(pet: Pet): void {



    this.adoption.petId = pet._id?.toString() || "";
    this.adoption.userId = localStorage.getItem('id')?.toString() || "";
    this.adoption.date = Date().toString();

    let test = false;


    this.adoptionRequests.forEach((req) => {
      if (this.adoption.petId == req.petId._id && this.adoption.userId == req.userId._id) {
        test = true;

      }
    })

    if (test) {
      alert("you already make a request");
      return;
    }


    // Call the createAdoption method from the service
    this.adoptionService.createAdoption(this.adoption).subscribe(
      (response) => {
        console.log('Adoption created successfully:', response);
        alert('Adoption created successfully!');
        // Optionally, reset form or redirect
      },
      (error) => {
        console.error('Error creating adoption:', error);
        alert('Error creating adoption!');
      }
    );
    this.adoptionService.getAllAdoptions().subscribe(
      (data) => {
        this.adoptionRequests = data.filter(adoption => adoption.status === 'onhold'); // Assign the fetched adoptions to the array
        console.log('Adoptions fetched successfully', this.adoptionRequests);
      },
      (error) => {
        console.error('Error fetching adoptions', error); // Handle any errors
      }
    );
  }


}
