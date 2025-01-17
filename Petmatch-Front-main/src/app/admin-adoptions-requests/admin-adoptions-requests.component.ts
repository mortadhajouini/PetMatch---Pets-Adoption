import { Component, OnInit } from '@angular/core';
import { Adoption } from '../models/adoption.model';
import { AdoptionService } from '../services/adoption.service';
import { PetService } from '../services/pet.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-adoptions-requests',
  templateUrl: './admin-adoptions-requests.component.html',
  styleUrls: ['./admin-adoptions-requests.component.css']
})
export class AdminAdoptionsRequestsComponent implements OnInit {
  // Sample data for adoption requests
  /*adoptionRequests = [
    {
      id: 1,
      petName: 'Max',
      species: 'Dog',
      userName: 'John Doe',
      date: '2024-12-01',
      imageUrl: 'assets/dog1.jpg'
    },
    {
      id: 2,
      petName: 'Bella',
      species: 'Cat',
      userName: 'Jane Smith',
      date: '2024-12-05',
      imageUrl: 'assets/cat-sitting.jpg'
    },
    {
      id: 3,
      petName: 'Charlie',
      species: 'Rabbit',
      userName: 'Chris Evans',
      date: '2024-12-10',
      imageUrl: 'assets/b2.jpg'
    }
  ];*/
  adoptionRequests!: Adoption[];


  constructor(private adoptionService: AdoptionService, private petService: PetService, private router: Router) { }

  ngOnInit(): void {

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

  // Function to accept an adoption request
  acceptRequest(request: Adoption) {
    if (confirm("are you sure ?")) {
      this.adoptionService.updateAdoptionStatus(request._id?.toString() || "", "accepted").subscribe(
        (updatedAdoption) => {
          console.log('Adoption status updated successfully', updatedAdoption);
          //Owner update
          this.petService.updatePetOwner(request.petId._id, request.userId._id).subscribe(
            (updatedPet) => {
              console.log('Owner updated successfully', updatedAdoption);
              location.reload();

            },
            (error) => {
              console.error('Error updating Owner status', error);
            }
          )

        },
        (error) => {
          console.error('Error updating adoption status', error); // Handle any errors
        }
      );
    }

  }

  // Function to decline an adoption request
  declineRequest(request: any) {
    this.adoptionService.updateAdoptionStatus(request._id?.toString() || "", "refused").subscribe(
      (updatedAdoption) => {
        console.log('Adoption status updated successfully', updatedAdoption);
        location.reload();

      },
      (error) => {
        console.error('Error updating adoption status', error); // Handle any errors
      }
    );


  }

}
