import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './admin-edit-profile-change-password.component.html',
  styleUrls: ['./admin-edit-profile.component.css']
})
export class AdminEditProfileChangePasswordComponent implements OnInit {
  currentPassword = '';
  newPassword = '';
  newPasswordConfirm = '';


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  // Save the updated profile details
  saveProfile() {

    if (this.currentPassword == "" || this.newPassword == "" || this.newPasswordConfirm == "") {
      alert("Please fill all the fields");
      return;
    }
    if (this.newPassword != this.newPasswordConfirm) {
      alert("Passwords do not match");
      return;
    }

    this.userService.changePassword(localStorage.getItem('email') || "", this.currentPassword, this.newPassword).subscribe(
      (response) => {
        alert('Password changed successfully!');
        this.router.navigate(['/admin-profile']);
      },
      (error) => {
        alert('Error changing password: ' + error.error.message);
      }
    );

  }

  // Cancel the editing and go back
  cancelEditing() {
    // alert('Editing Password canceled!');
    this.router.navigate(['/admin-profile']);
    // Add logic to navigate back to profile page or previous page
  }
}
