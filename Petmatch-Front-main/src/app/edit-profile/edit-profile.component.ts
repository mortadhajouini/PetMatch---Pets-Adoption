import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userName = localStorage.getItem('name');
  userEmail = localStorage.getItem('email');


  isOwner = true;
  isManager = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  // Save the updated profile details
  saveProfile() {
    this.userService.changeUserNameByEmail(this.userEmail || "", this.userName || "").subscribe(
      (response) => {
        console.log('Name changed successfully', response);
        localStorage.setItem('name', response.user)
        // Optionally, redirect to another page after successful name change
        this.router.navigate(['/profile']); // Assuming a profile page to view the updated name
      },
      (error) => {
        console.error('Error changing name', error);
        // Handle error (e.g., show a message to the user)
      }
    );
  }

  // Cancel the editing and go back
  cancelEditing() {
    this.router.navigate(['/profile']);
    // Add logic to navigate back to profile page or previous page
  }
}
