import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../models/appointment.model';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-admin-appointments-approval',
  templateUrl: './admin-appointments-approval.component.html',
  styleUrls: ['./admin-appointments-approval.component.css']
})
export class AdminAppointmentsApprovalComponent implements OnInit {
  approvedDate: string = '';
  approvedTime: string = '';
  appointmentTitle !: string;
  appointmentId !: string;


  constructor(private appointmentService: AppointmentService, private router: Router, private route: ActivatedRoute) {
    // Retrieve the appointment data from state

  }

  ngOnInit(): void {
    this.appointmentTitle = localStorage.getItem("title") || "bla";
    this.appointmentId = localStorage.getItem("appId") || "bla";
    localStorage.removeItem("title");
    localStorage.removeItem("appId");
  }

  // Function to submit approval
  submitApproval() {
    if (this.approvedDate == "") {
      alert("Please select a date");
      return;
    }
    if (this.approvedTime == "") {
      alert("Please select a time");
      return;
    }
    this.appointmentService.updateAppointmentStatus(this.appointmentId, "accepted", this.approvedDate, this.approvedTime).subscribe(
      (response) => {
        console.log('Appointment status updated successfully', response);

      },
      (error) => {
        console.error('Error updating appointment status', error);
        // Handle error if needed
      }
    );

  }
}
