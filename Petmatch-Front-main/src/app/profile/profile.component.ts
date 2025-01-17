import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userName = localStorage.getItem('name');
  userEmail = localStorage.getItem('email');


  ngOnInit() {

  }

  editProfile() {
    alert('Edit profile functionality to be implemented.');
  }
}
