import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';  // To bind the email input
  password: string = '';  // To bind the password input
  confirmpassword: string = '';
  fullName: string = '';
  errorMessage: string = '';
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // Any initialization logic goes here
  }

  signIn(): void {
    if (this.email == '') {
      alert("fill the mail field");
      return;

    }
    if (this.password == '') {
      alert("fill the password field");
      return;
    }
    if (this.password != this.confirmpassword) {
      alert("passwords do not match");
      return;
    }
    if (this.fullName == '') {
      alert("fill the full name field");
      return;
    }



    const user: User = {
      email: this.email, password: this.password, role: 'user',
      fullName: this.fullName
    };  // Create a user object for login

    this.userService.createUser(user).subscribe(
      (response) => {
        console.log('Login successful', response);
        // Save token or user data in localStorage (if needed for authentication)
        localStorage.setItem('user', JSON.stringify(response));  // Save user data (e.g., JWT token, user details)
        alert("register successfully !")

        // Optionally, redirect the user to another page (e.g., dashboard)
        this.router.navigate(['/login']);  // Change the route to your desired destination
      },
      (error) => {
        console.error('Error logging in', error);
        alert('Invalid credentials. Please try again.');
      }
    );
  }

}
