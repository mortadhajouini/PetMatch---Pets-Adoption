import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../models/pet.model';
import { PetService } from '../services/pet.service';
import { AppointmentService } from '../services/appointment.service';
import { AppComponent } from '../app.component';
import { Appointment } from '../models/appointment.model';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {
  appointment = {
    note: '',
    userId: '',
    petId: '',
    status: '',
    title: '',
    date: '',
    time: ''

  };
  pets!: Pet[];
  selectedValue = "";

  constructor(private router: Router, private petService: PetService, private appointmentService: AppointmentService) { }

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
  onSelectionChange(event: any) {
    this.appointment.petId = this.selectedValue.toString();
  }

  submitForm() {

    this.appointment.userId = localStorage.getItem('id')?.toString() || "";
    this.appointment.status = "onhold";
    this.appointmentService.createAppointment(this.appointment).subscribe(
      (response) => {
        console.log('Appointment created successfully', response);
        // You can redirect or show a success message here
      },
      (error) => {
        console.error('Error creating appointment', error);
        // Handle error (e.g., show an error message to the user)
      }
    );
    this.router.navigate(['/rendezvous']); // Redirect to Appointments page
  }
}
