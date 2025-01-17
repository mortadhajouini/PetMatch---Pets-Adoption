import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
  userName = localStorage.getItem('name');
  userEmail = localStorage.getItem('email');


  ngOnInit() {

  }

  editProfile() {
    alert('Edit profile functionality to be implemented.');
  }
}
