import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = new User();



  constructor(private userService: UserService, private router: Router) { }

  login() {
    this.userService.login(this.user).subscribe(
      (response) => {
        console.log('Login successful:', response);
        localStorage.setItem("id", response.user._id);
        localStorage.setItem("name", response.user.fullName);
        localStorage.setItem("email", response.user.email);

        if (response.user.role == 'manager') {
          this.router.navigate(['/admin-profile']);
        }
        else {
          this.router.navigate(['/profile'])
        }



        // handle success, like navigating to another page
      },
      (error) => {
        alert("invalid login")
        console.error('Login failed:', error);
        // handle error, like showing a message to the user
      }
    );
  }
}
