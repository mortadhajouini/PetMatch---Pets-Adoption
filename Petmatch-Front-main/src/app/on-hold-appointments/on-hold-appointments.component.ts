// on-hold-appointments.component.ts
import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../models/appointment.model';

@Component({
  selector: 'app-on-hold-appointments',
  templateUrl: './on-hold-appointments.component.html',
  styleUrls: ['./on-hold-appointments.component.css']
})
export class OnHoldAppointmentsComponent implements OnInit {
  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getAllAppointments().subscribe(
      (appointments) => {
        this.appointments = appointments;  // Assign the fetched appointments to the array
        console.log('Appointments fetched successfully', this.appointments);
        //filter the on hold only
        this.appointments = this.appointments.filter(appointment => appointment.status === 'onhold');
      },
      (error) => {
        console.error('Error fetching appointments', error);  // Handle error
      }
    );
  }
}
