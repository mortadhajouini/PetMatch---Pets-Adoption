import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit-profile',
  templateUrl: './admin-edit-profile.component.html',
  styleUrls: ['./admin-edit-profile.component.css']
})
export class AdminEditProfileComponent {
  userName = localStorage.getItem('name') || "";
  userEmail = localStorage.getItem('email') || "";


  isOwner = true;
  isManager = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  // Save the updated profile details
  saveProfile() {

    // Add logic to save updated profile (e.g., send to backend)
    this.userService.changeUserNameByEmail(this.userEmail, this.userName).subscribe(
      (response) => {
        console.log('Name changed successfully', response);
        localStorage.setItem('name', response.user)
        // Optionally, redirect to another page after successful name change
        this.router.navigate(['/admin-profile']); // Assuming a profile page to view the updated name
      },
      (error) => {
        console.error('Error changing name', error);
        // Handle error (e.g., show a message to the user)
      }
    );
    //alert('Profile updated successfully!');

  }

  // Cancel the editing and go back
  cancelEditing() {
    //alert('Editing canceled!');
    this.router.navigate(['/admin-profile']);
    // Add logic to navigate back to profile page or previous page
  }
}
