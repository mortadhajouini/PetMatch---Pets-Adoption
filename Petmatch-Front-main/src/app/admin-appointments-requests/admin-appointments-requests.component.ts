import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../models/appointment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-appointments-requests',
  templateUrl: './admin-appointments-requests.component.html',
  styleUrls: ['./admin-appointments-requests.component.css']
})
export class AdminAppointmentsRequestsComponent implements OnInit {
  // Sample appointment requests (replace with data from your backend)
  /* appointmentRequests = [
     { id: 1, title: 'Checkup for Max', userName: 'John Doe', petName: 'Max' },
     { id: 2, title: 'Vaccination for Bella', userName: 'Jane Smith', petName: 'Bella' },
     { id: 3, title: 'Dental Check', userName: 'Chris Evans', petName: 'Charlie' }
   ];*/
  appointmentRequests!: Appointment[];

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {

    this.appointmentService.getAllAppointments().subscribe(
      (data) => {

        this.appointmentRequests = data.filter(appointment => appointment.status === 'onhold');  // Assign the fetched appointments to the array
        console.log('Appointments fetched successfully', this.acceptRequest);
      },
      (error) => {
        console.error('Error fetching appointments', error);  // Handle error
      }
    );
  }

  // Function to accept an appointment request
  acceptRequest(request: Appointment) {
    localStorage.setItem("title", request.title);
    localStorage.setItem("appId", request._id?.toString() || "");

    this.router.navigate(['/admin-appointments-approval']);
  }

  // Function to decline an appointment request
  declineRequest(request: any) {
    if (confirm("Are you sure you want to delete the appointment ?")) {
      this.appointmentService.deleteAppointment(request._id).subscribe(
        (response) => {
          console.log('Appointment deleted successfully:', response);

        },
        (error) => {
          console.error('Error deleting appointment', error);
        }
      );
    }
    location.reload();


  }
}
